import { NextResponse } from "next/server"
import { contactSchema } from "@/lib/validations/contact"
import nodemailer from "nodemailer"
import { z } from "zod"

export async function POST(request: Request) {
  try {
    if (
      !process.env.EMAIL &&
      !process.env.EMAIL_PASSWORD &&
      !process.env.TO_EMAIL &&
      !process.env.EMAIL_HOST
    ) {
      return NextResponse.json(
        { message: "Please setup your email and password." },
        { status: 400 }
      )
    }

    const data = contactSchema.parse(await request.json())

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: { user: process.env.EMAIL, pass: process.env.EMAIL_PASSWORD },
    })

    await transporter.sendMail(
      {
        from: `Roopaish.com<${process.env.EMAIL}>`,
        to: process.env.TO_EMAIL,
        subject: "Message from roopaish.com website",
        html: html(data),
      },
      function (err, info) {
        console.log({ err })
        console.log({ info })
        if (err) {
          NextResponse.json(
            {
              success: false,
              title: "Message not sent",
              message: "Something went wrong!",
            },
            { status: 400 }
          )
        } else {
          NextResponse.json({
            success: true,
            title: "Message sent",
            message: "I will get back to you.",
          })
        }
      }
    )

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out. I will contact you soon.",
    })
  } catch (e) {
    console.log({ error: e })
    NextResponse.json(
      {
        success: false,
        title: "Message not sent",
        message: "Something went wrong!",
      },
      { status: 400 }
    )
  }
}

function html(data: z.infer<typeof contactSchema>) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Template</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
          }
          .container {
              max-width: 600px;
              margin: 20px auto;
              padding: 20px;
              background-color: #fff;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          ul {
              list-style-type: none;
              padding: 0;
          }
          li {
              margin-bottom: 10px;
          }
          li strong {
              font-weight: bold;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h2>Email from roopaish.com</h2>
          <ul>
              <li><strong>Name:</strong> ${data.name}</li>
              <li><strong>Email:</strong> ${data.email}</li>
              <li><strong>Subject:</strong> ${data.subject}</li>
              <li><strong>Body:</strong> ${data.body}</li>
          </ul>
      </div>
  </body>
  </html>
  
  `
}

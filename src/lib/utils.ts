import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getYearsOfExperience() {
  const startDate = new Date("2021-09-01")
  const currentDate = new Date()

  const difference = currentDate.getTime() - startDate.getTime()

  const yearsDifference = difference / (1000 * 60 * 60 * 24 * 365.25)

  const roundedYears = Math.round(yearsDifference * 10) / 10

  return `${roundedYears}+yrs`
}

import { IconType } from "@/components/icons"

export const contacts: { title: string; href: string; icon: IconType }[] = [
  {
    title: "Email",
    href: "mailto:hi@roopaish.com",
    icon: "Mail",
  },
  {
    title: "Github",
    href: "https://github.com/roopaish",
    icon: "Github",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/roopaish_",
    icon: "Twitter",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/roopaish/",
    icon: "Linkedin",
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com/@roopaish/",
    icon: "Youtube",
  },
]

export const email = "hi@roopaish.com"

export const featuredProjects = [
  {
    title: "GrihaHub",
    description: "Realstate property listing platform",
    href: "https://realstate.suvaye.com",
    img: "/projects/grihahub.png",
    skills: ["Project management"],
  },
  {
    title: "Hyperce Demo",
    description: "E-commerce starter with Vendure and Remix.",
    href: "https://demo.hyperce.io/",
    img: "/projects/hyperce.png",
    skills: ["Frontend Development"],
  },
  {
    title: "Menzz.co",
    description: "Online e-commerce website targeted for men.",
    href: "https://menzz.co",
    img: "/projects/menzz.png",
    skills: ["Frontend Development"],
  },
  {
    title: "Clamphook App",
    description:
      "Entrance preparation app with Latex support, Live and Recorded classes",
    href: "https://play.google.com/store/apps/details?id=com.clamphook.clamphook",
    img: "/projects/clamphook.png",
    skills: ["Mobile App Development"],
  },
  {
    title: "Aaagaman App",
    description: "Restaurant discovery & food pre-booking services.",
    href: "https://play.google.com/store/apps/details?id=com.aagaman.bookingapp",
    img: "/projects/aagaman.png",
    skills: ["Mobile App Development"],
  },
  {
    title: "Ease Commerce",
    description:
      "Search and Compare products across multiple e-commerce sites like Daraz and Amazon",
    href: "https://github.com/Roopaish/ease_commerce_web",
    github: "https://github.com/Roopaish/ease_commerce_web",
    img: "/projects/ease-commerce.png",
    skills: ["Full-stack Development"],
  },
  {
    title: "Flutter Roadmap",
    description:
      "Flutter notes, Quiz, Recipe, Expense Tracking, Shopping and Chat App",
    href: "https://flutter-roadmap.netlify.app/#/",
    github: "https://github.com/Roopaish/Flutter-RoadMap",
    img: "/projects/gallery/apps.png",
    skills: ["Mobile App Development"],
  },
  {
    title: "CSS Roadmap",
    description:
      "CSS Stuffs, Animations, Emoji, Tooltips, Landing Page, Youtube Clone",
    href: "https://roopaish.github.io/CSS-RoadMap/",
    github: "https://github.com/Roopaish/Flutter-RoadMap",
    img: "/projects/gallery/youtube_redesign.png",
    skills: ["UI Development"],
  },
]

export const favTechs: { icon: IconType; title: string }[] = [
  {
    title: "TailwindCSS",
    icon: "Tailwind",
  },
  {
    title: "Typescript",
    icon: "Typescript",
  },
  {
    title: "NodeJs",
    icon: "node",
  },
  {
    title: "ReactJs",
    icon: "React",
  },
  {
    title: "NextJs",
    icon: "Next",
  },
  {
    title: "Remix",
    icon: "Remix",
  },
  {
    title: "Astro",
    icon: "Astro",
  },
  {
    title: "GraphQL",
    icon: "GraphQL",
  },
  {
    title: "TRPC",
    icon: "trpc",
  },
  {
    title: "AntDesign",
    icon: "AntDesign",
  },
  {
    title: "ChakraUI",
    icon: "ChakraUI",
  },
  {
    title: "Flutter",
    icon: "Flutter",
  },
  {
    title: "React-Native/Expo",
    icon: "Expo",
  },
  {
    title: "NestJs",
    icon: "nest",
  },
  {
    title: "GoLang",
    icon: "go",
  },
  {
    title: "Python",
    icon: "python",
  },
  {
    title: "Figma",
    icon: "Figma",
  },
]

export const fullstackDevTextAsCode =
  'const{jsx:e,jsxs:n}=arguments[0];function _createMdxContent(t){const a={code:"code",figure:"figure",pre:"pre",span:"span",...t.components};return e(a.figure,{"data-rehype-pretty-code-figure":"",children:e(a.pre,{style:{backgroundColor:"#24273a",color:"#cad3f5"},tabIndex:"0","data-language":"jsx","data-theme":"catppuccin-macchiato",children:e(a.code,{"data-language":"jsx","data-theme":"catppuccin-macchiato",style:{display:"grid"},children:n(a.span,{"data-line":"",children:[e(a.span,{style:{color:"#8BD5CA"},children:"<"}),e(a.span,{style:{color:"#F5BDE6"},children:"FullstackDeveloper"}),e(a.span,{style:{color:"#8BD5CA"},children:" />"})]})})})})}return{default:function(n={}){const{wrapper:t}=n.components||{};return t?e(t,{...n,children:e(_createMdxContent,{...n})}):_createMdxContent(n)}};'

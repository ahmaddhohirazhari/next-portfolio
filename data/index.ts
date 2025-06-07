import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I build financial and MIS systems for enterprises",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Experience with Node.js, Go, Python, Vue, and React",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack evolves with project needs",
    description: "Versatile in backend & frontend web development",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Physics graduate with critical thinking and problem solving",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Lead projects like CRM, Crowdfunding Platform, and HireMe",
    description: "Combining leadership and technical excellence",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Open to collaboration and freelance opportunities",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;


export const projects = [
  {
    id: 1,
    title: "CRM Web App",
    des: "CRM and CMS platform for NGO crowdfunding, built with Golang and React/Next.js.",
    img: "/crm-universa.png",
    iconLists: ["/re.svg", "/next.svg", "/ts.svg", "/go.svg"],
    link: "https://crm.universa.vip/",
    sourceCode: "",
  },
  {
    id: 2,
    title: "Platform Crowdfunding",
    des: "Donation platform for NGOs with payment gateway integration and donor management.",
    img: "/tb-yakesma.png",
    iconLists: ["/go.svg", "/re.svg", "/next.svg"],
    link: "https://temanberbagi.org/",
    sourceCode: "",
  },
  {
    id: 3,
    title: "FazzPay Web App",
    des: "Modern e-wallet app using React and Express with complete balance management.",
    img: "/fazzpay.png",
    iconLists: ["/re.svg", "/ts.svg"],
    link: "https://fazzpay-frontend-eight.vercel.app/",
    sourceCode: "",
  },
  {
    id: 4,
    title: "HireMe Web App",
    des: "A job portal platform connecting companies and candidates, built as team project.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/ts.svg"],
    link: "https://hiremefwb10.netlify.app/",
    sourceCode: "",
  },

] as const;

export const testimonials = [
  {
    quote: `Ahmad consistently delivered high-quality solutions even on tight deadlines. His ability to lead projects and solve complex problems made him a great asset to the team.`,
    name: "Project Manager",
    title: "Pegadaian MIS Project",
  },
  {
    quote: `He communicates well and bridges frontend and backend development effectively. Highly recommended for full-stack roles.`,
    name: "Tech Lead",
    title: "Universa Transformasi Digital",
  },
] as const;


export const companies = [
  {
    id: 1,
    name: "Pegadaian",
    img: "/pegadaian.png",
  },
  {
    id: 2,
    name: "YAKESMA",
    img: "/yakesma.png",
  },
  {
    id: 3,
    name: "Universa Digital",
    img: "/universa.jpeg",
  },
  {
    id: 4,
    name: "Merkle Innovation",
    img: "/merkle.png",
  },
  {
    id: 5,
    name: "Metra Net",
    img: "/metranet.png",
  },
] as const;


export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer - Pegadaian",
    desc: "Built MIS and financial modeling system using Vue.js, Golang, and Python.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend Developer - Merkle Innovation",
    desc: "Developed HIS reporting services using Node.js and Express.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full Stack Developer - Universa Digital",
    desc: "Created CRM and Crowdfunding Platform using Golang and Next.js.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "IT Supervisor - YAKESMA",
    desc: "Lead IT operations and collaborated with vendors for system development.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;


export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/sanidhyy",
  },
  {
    name: "Twitter",
    img: "/twit.svg",
    link: "https://twitter.com/TechnicalShubam",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sanidhyy",
  },
] as const;

export const techStack = {
  stack1: ["Vue.js", "React.js", "Next.js", "TypeScript"],
  stack2: ["Node.js", "Golang", "Python", "Express.js", "MongoDB"],
} as const;


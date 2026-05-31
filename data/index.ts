export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently exploring more backend technologies",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "StudyNotion - EdTech Learning Platform",
    des: "A full-stack EdTech platform where students can purchase courses, watch content, and instructors can manage dashboards and earnings.",
    img: "/studynotion.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/node.svg", "/mongo.svg", "/redux.svg", "/express.svg"],
    link: "https://study-notion-kohl-pi.vercel.app/",
  },
  {
    id: 2,
    title: "Chatty - Real Time Chat Application",
    des: "A real-time chat application with instant messaging, online status, and responsive UI powered by Socket.IO and MERN stack.",
    img: "/chatty.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/node.svg", "/mongo.svg", "/vite.svg", "/express.svg", "/socket.svg"],
    link: "https://realtime-chat-app-chatty-li7x.onrender.com",
  },
  {
    id: 3,
    title: "Insurance Gallery - Insurance Web Portal",
    des: "A responsive insurance platform showcasing policy services, clean UI sections, and smooth navigation for better user experience.",
    img: "/insurace-gallery.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/node.svg", "/mongo.svg", "/mui.svg", "/express.svg"],
    link: "https://insurance-gallery.onrender.com/",
  },
  {
    id: 4,
    title: "BankYou - Online Sewa Kendra Platform",
    des: "A digital sewa kendra platform designed to simplify banking services, document support, and user accessibility across devices.",
    img: "/banku-sewa-kendra.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/node.svg", "/mongo.svg", "/mui.svg", "/express.svg"],
    link: "https://bankyou-sewa-kendra.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "An innovative mind with a knack for finding creative shortcuts to great results. Keep it up!",
    name: "Divyanshu Aggarwal",
    title: "AI Engineer - Testing",
    img: "/divyanshu.png",
    badge: "/badge1.png"
  },
  {
    quote:
      "An innovative mind with a knack for finding creative shortcuts to great results. Keep it up!",
    name: "Divyanshu Aggarwal",
    title: "AI Engineer - Testing",
    img: "/divyanshu.png",
    badge: "/badge1.png"
  },
  // {
  //   quote:
  //     "Collaborating with Daksh was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Daksh's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Daksh is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  //   img: "",
  //   badge: ""
  // }
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern - Consint.Ai",
    desc: "Worked on developing and enhancing multiple healthcare insurance claim management modules by implementing UI features, API integrations, validations, bug fixes, NEFT workflows, DMS handling, dashboards, and responsive interfaces using React.js and modern frontend practices.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer Intern - Avyaanya Tech Pvt Ltd",
    desc: "Developed and deployed responsive web applications including an insurance platform and a digital sewa kendra portal, focusing on user-friendly UI, frontend functionality, and seamless user experience.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
//   {
//     id: 3,
//     title: "Freelance App Dev Project",
//     desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
//     className: "md:col-span-2", // change to md:col-span-2
//     thumbnail: "/exp3.svg",
//   },
//   {
//     id: 4,
//     title: "Lead Frontend Developer",
//     desc: "Developed and maintained user-facing features using modern frontend technologies.",
//     className: "md:col-span-2",
//     thumbnail: "/exp4.svg",
//   },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/D-a-k-s-h"
  },
  {
    id: 2,
    img: "/instagram.svg",
    link: "https://www.instagram.com/preet_daksh_1313/"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/daksh-k-789083257"
  },
];
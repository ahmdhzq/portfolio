const projects = [
  {
    id: 1,
    title: "CodeLearn - Education Platform",
    description: "CodeLearn is a web-based educational platform designed to make learning to code more interactive, structured, and enjoyable. The project is built using Laravel 11 as its backend, with a focus on a dynamic user experience and a comprehensive admin panel for content management.",  
    tags: [
      "Laravel",
      "Bootstrap 5",
      "PosgreSQL",
      "CKEditor",
      "Chart.js"
    ], 
    imageUrl: "/assets/codelearn.png",
    githubUrl: "https://github.com/ahmdhzq/code-learn.git",
  },
  {
    id: 2,
    title: "KUIBIS App",
    company: "PT. Eternal Jaya Engineering", 
    description: "An enterprise web application designed for modern business needs. It features an analytics dashboard for data visualization, dynamic map integration for geographical mapping, and is equipped with a content management system and a secure payment gateway.",  
    tags: ["Next.js", "React.js", "Dynamic Maps", "Payment Gateway", "Data Visualization"], 
    imageUrl: "/assets/kuibis.png",
  },
  {
    id: 3,
    title: "Student Permit Application",
    description: "A digital system that simplifies the permit application process in a boarding school environment. Students can submit requests online, which then go through a multi-level approval workflow. The system also sends status notifications via WhatsApp and generates summary reports automatically.",
    tags: ["Laravel", "Bootstrap 5", "WhatsApp API", "Multi-level Approval"], 
    imageUrl: "/assets/petik.png"
  },
  {
    id: 4,
    title: "Institutional Website & CMS for STT Stikma",
    description: "A Content Management System (CMS) built specifically for the STT Stikma International institutional website. Through this platform, administrators can easily update institutional information, manage blog content, and handle user access rights autonomously.",
    tags: ["Laravel", "Bootstrap 5", "CMS", "Content Management"],
    imageUrl: "/assets/stikma.png"
  },
  {
    id: 5,
    title: "Masterprima Company Profile & Blog",
    description: "A professional company profile website for Masterprima, designed to showcase their services and brand identity. The site includes a fully integrated Content Management System (CMS) that allows administrators to easily create, update, and manage blog articles.",
    tags: ["React", "LMS", "CRUD", "Admin Panel", "Education"], 
    imageUrl: "/assets/masterprima.png",
    livePreviewUrl: "https://blog-masterprima.wuaze.com"
  },
  
];

export default projects;
import Link from "next/link";
import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "python",
    Image: "/pythonlogo.svg",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Cpp",
    Image: "/cpplogo.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "MATLAB",
    Image: "/Matlablogo.svg",
    width: 80,
    height: 80,
  },
  {
    name: "PHP",
    Image: "/phplogo.svg",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Socials = [
  {
    name: "Linkedin",
    src: "/linkedin.svg",
    link: "https://www.linkedin.com/in/sameersethi30/"
  },
  {
    name: "Github",
    src: "/github.svg",
    link: "https://github.com/Sameer-Sethi"
  },
  {
    name: "Instagram",
    src: "/instagram.svg",
    link: "https://www.instagram.com/sameer_sethi91/"
  },
];
export const Projects = [
  {
    title: "Modern Nextjs Website",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/NextWebsite.png",
  },
  {
    title: "NeuroExplain",
    text: "Developed a deep learning model to predict Alzheimer’s disease progression using clinical and genetic data. Leveraged LSTM networks and attention mechanisms for accurate, interpretable results, enabling practical insights for real-world healthcare applications.",
    src: "/NeuroExplain.png",
  },
  {
    title: "Salary Sync",
    text: "Salary_sync is an advanced payroll management solution that automates accurate salary calculations, payments, and reporting, empowering companies to efficiently handle payroll on any schedule. It simplifies payroll processes, ensuring compliance and accuracy while saving time and resources.",
    src: "/SalarySync.png",
  },
  {
    title: "Advancing FHO algorithm",
    text: "Enhanced the Fire Hawk Optimization algorithm with reinforcement learning and adaptive tuning, achieving 30% faster convergence and 20% lower computational cost on benchmark tests. Enabled efficient, lightweight truss designs for real-world engineering applications.",
    src: "/FHO.png",
  },
  {
    title: "QuantumCrypt Insight",
    text: "Researched the security of BB84 and B92 quantum key distribution protocols against common attacks, integrating machine learning models to predict eavesdropping success and classify attack types. Developed a simulation framework that improved attack detection accuracy by 30%.",
    src: "/QuantumCrypt.png",
  },
  {
    title: "CarbonConsious",
    text: "CarbonConscious is a powerful web application designed to help you measure and understand your carbon footprint with ease. By analyzing your daily activities and lifestyle choices, CarbonConscious provides a comprehensive overview of your environmental impact.",
    src: "/CarbonConsious.png",
  },
  
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];

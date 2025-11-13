import {
  mobile,
  backend,
  creator,
  web,jainish_shah,
  java,
  javascript,
  online,
  DB,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  IDA,IDA_1,
  tesla,
  shopify,
  carrent,
  attendance,
  jobit,
  tripguide,
  threejs,
  resume,
  amol,
  bhawar,
  jasmeet,CSUF,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "Testimonials",
    title: "Testimonials",
  },
  {
    id: "Projects",
    title: "Projects",
  },
];

const services = [
  {
    title: "Android",
    icon: web,
  },
  {
    title: "Java",
    icon: backend,
  },
  {
    title: "BackEnd Developer",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const image = jainish_shah;

const technologies = [
  {
    name: "JAVA",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "DB",
    icon: DB,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Teaching Associate",
    company_name: "California State University Fullerton",
    icon: CSUF,
    iconBg: "#383E56",
    date: " August 2024 - Present",
    points: [
      " Instructing Web Backend and Android Development & Web Backend Engineering to a group of 40 students. My responsibilities encompass delivering lectures, grading assignments, and resolving students' doubts.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Intellect Design Arena",
    icon: IDA,
    iconBg: "#383E56",
    date: " October 2019 - August 2023",
    points: [
      " Modernized Android banking app by transforming MVC to MVVM with Kotlin + Jetpack, building reusable modules, integrating with client systems, ensuring compliance, and improving reliability using Retrofit, Coroutines, Room, and CI/CD with robust testing.",
      " Led a 7-member AMC team to resolve 500+ post-Go-Live issues for UOB Bank’s web portal, driving uptime and client satisfaction through root cause analysis, release coordination, and remote collaboration during COVID."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Intellect Design Arena",
    icon: IDA,
    iconBg: "#FFFFFF",
    date: " August 2018 - September 2019",
    points: [
      " Designed and implemented scalable banking solutions with Java, Spring Boot, REST APIs, Hibernate, and relational databases, developing backend modules, schemas, and automated tests to improve processing time, reliability, and reduce QA effort by 40%.",
      " Enhanced delivery workflows by introducing DevOps practices with Jenkins and Git, collaborating across teams in Agile, and authoring technical documentation to accelerate deployment consistency, knowledge transfer, and client onboarding."
    ],
  },
  {
    title: "Android Developer Intern",
    company_name: "Narayankrupa Tenstones Pvt. Ltd",
    icon: meta,
    iconBg: "#383E56",
    date: " July 2017 - May 2018",
    points: [
      " Built and optimized a native Android app with Kotlin, XML, and Firebase, implementing authentication, push notifications, offline caching, and efficient networking (Retrofit + OkHttp) to boost reliability and reduce latency.",
      " Ensured quality and smooth performance through Espresso/UI testing, crash monitoring, and Agile collaboration with engineers and designers for timely feature delivery."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Jainish consistently applied a scientific mindset to problem-solving, addressing issues at their core. Proficient in Java, JSP, JS, Oracle SQL, and PLSQL, he showcased leadership and mentorship skills at Intellect Design Arena, contributing to the development of a robust team.",
    name: "Amol Garve",
    designation: "AVP",
    company: "Intellect Design Arena Ltd.",
    image: amol,
  },
  {
    testimonial:
      "It was fantastic to work together with Jainish. He consistently demonstrated a solid work ethic and is dedicated,self- motivated and very capable and also an inspiring team player!",
    name: "Jasmeet Singh",
    designation: "Team Lead",
    company: "Intellect Design Arena Ltd.",
    image: jasmeet,
  },
  {
    testimonial:
      "He is attentive , focussed and precision obsessed. Always takes end to end ownership and leads from the front.",
    name: "Bhawar Ramteke",
    designation: "Senior Project Manager",
    company: "Intellect Design Arena Ltd.",
    image: bhawar,
  },
];

const projects = [
  {
    name: "Attendance Tracker",
    description:
      "The Attendance Tracker is a web-based application designed to streamline the process of tracking student attendance in educational institutions. It provides an efficient and reliable way for teachers or administrators to monitor and manage attendance records for individual students.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Azure",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: attendance,
    source_code_link: "https://github.com/jainishshah0124/Crime_Classification",
  },
  {
    name: "Online Shopping",
    description:
      "Managed customer orders for items/services from a hybrid store, expertly controlling order cutoff and delivery timing, yielding efficiency improvements surpassing 80% .",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
    ],
    image: online,
    source_code_link: "https://github.com/jainishshah0124/Online-Shopping",
  },
  {
    name: "Crime Classification",
    description:
      "Creating a crime categorization system to automate the assignment of officers, optimizing law enforcement resource allocation. Utilized PySpark for feature extraction and diverse supervised machine learning algorithms to tackle the multi-class text classification challenge.",
    tags: [
      {
        name: "pyspark",
        color: "blue-text-gradient",
      },
      {
        name: "hadoop",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/jainishshah0124/Crime_Classification",
  },
  {
    name: "ERP for Institute",
    description:
      "Developed a comprehensive website to efficiently manage college activities and student interactions. The platform features 100+ users and modules for students, staff, and accounts, each with tailored privileges.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "oracle",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/jainishshah0124/ERP-For-Institute",
  },
  {
    name: "Job IT",
    description:
      "Designed Job Portal for streamlined job seeker-company connections, enabling interactive job vacancy management, resume submissions, interview scheduling, and applicant registration helping 70% users.",
    tags: [
      {
        name: "JAVA",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/jainishshah0124/Jobs_India.com",
  },
];

export { services, technologies, experiences, testimonials, projects, image };
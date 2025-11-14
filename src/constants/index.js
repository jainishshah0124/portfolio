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
  jasmeet,CSUF,wellgorithm
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
    title: "Mobile Development",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI/ML",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: web,
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
    date: " August 2024 - May 2025",
    points: [
      "Improved student proficiency in backend and AI application development by teaching Python, Flask, REST APIs, and machine learning fundamentals.",
      "Mentored 40+ students on Agentic AI workflows, prompt engineering, and integrating AI/LLM tools such as LangChain and OpenAI APIs into full-stack systems."
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Intellect Design Arena",
    icon: IDA,
    iconBg: "#383E56",
    date: " October 2019 - August 2023",
    points: [
      "Enhanced app modularity and performance by migrating enterprise banking apps from MVC → MVVM using Kotlin, Jetpack  Compose, and Material Design",
      "Developed light ML-driven reporting utilities with Python & Scikit-learn to enhance operational intelligence and automate recurring analytics workflows",
      "Improved performance with Retrofit + Coroutines for networking and Room for offline persistence across multi-module builds",
      "Strengthened reliability via JUnit/Espresso automation and CI/CD (Jenkins), reducing production defects and release rollbacks",
      "Collaborated with data, AI, and product teams to align model outputs with business metrics for improved decision automation",
      "Led a 7-member AMC team resolving 500+ post-Go-Live issues during COVID, earning a GEM Award among 200+ developers for data-driven stability",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Intellect Design Arena",
    icon: IDA,
    iconBg: "#FFFFFF",
    date: " August 2018 - September 2019",
    points: [
      "Built scalable components using Java, Spring Boot, REST APIs, and JDBC/Hibernate, improving response times by 20%.",
      "Designed automation scripts and ML-assisted reporting utilities in Python and Scikit-learn to enhance operational intelligence.",
      "Implemented Selenium + JUnit testing and Jenkins pipelines, cutting manual QA effort by 40% and increasing release reliability.",
      "Collaborated with cross-functional teams to integrate predictive data modules and support early adoption of dashboards.",
    ],
  },
  {
    title: "iOS Developer Intern",
    company_name: "Narayankrupa Tenstones Pvt. Ltd",
    icon: meta,
    iconBg: "#383E56",
    date: " July 2017 - May 2018",
    points: [
      "Built native Android applications using Kotlin, XML, and Android Studio, ensuring seamless UX across multiple device types.",
      "Delivered authentication, push notifications, and offline caching modules, improving reliability by 30% across releases.",
      "Integrated Firebase (Realtime DB, Analytics, Crashlytics) to capture usage metrics and optimize stability.",
      "Optimized network calls with Retrofit and OkHttp, reducing API latency by 25% and supporting early data-driven insights.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He is attentive , focussed and precision obsessed. Always takes end to end ownership and leads from the front.",
    name: "Bhawar Ramteke",
    designation: "Senior Project Manager",
    company: "Intellect Design Arena Ltd.",
    image: bhawar,
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
      "Jainish consistently applied a scientific mindset to problem-solving, addressing issues at their core. Proficient in Java, JSP, JS, Oracle SQL, and PLSQL, he showcased leadership and mentorship skills at Intellect Design Arena, contributing to the development of a robust team.",
    name: "Amol Garve",
    designation: "AVP",
    company: "Intellect Design Arena Ltd.",
    image: amol,
  },
];

const projects = [
  {
    name: "Attendance Tracker",
    description:
      "The Attendance Tracker is a web-based application designed to streamline the process of tracking student attendance in educational institutions. It provides an efficient and reliable way for teachers or administrators to monitor and manage attendance records for individual students and entire classes.",
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
    name: "Wellgorithm",
    description:
      "Built an Agentic AI–powered healthcare platform that processed 300+ medical reports for users through a multi-model architecture, integrating autonomous reasoning, secure authentication, in-context learning, and 20MB PDF parsing for accurate clinical data extraction and analysis.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "Groq",
        color: "pink-text-gradient",
      },
      {
        name: "Llama-3",
        color: "pink-text-gradient",
      },
    ],
    image: wellgorithm,
    source_code_link: "https://github.com/jainishshah0124/Wellgorithm",
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
      "Designed Job Portal for streamlined job seeker-company connections, enabling interactive job vacancy management, resume submissions, interview scheduling, and applicant registration helping 70% of applicants.",
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
  {
    name: "Online Shopping",
    description:
      "Managed customer orders for items/services from a hybrid store, expertly controlling order cutoff and delivery timing, yielding efficiency improvements surpassing 80% .",
    tags: [
      {
        name: "JAVA",
        color: "blue-text-gradient",
      },
      {
        name: "Oracle",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: online,
    source_code_link: "https://github.com/jainishshah0124/OnlineShopping",
  },
];

export { services, technologies, experiences, testimonials, projects, image };
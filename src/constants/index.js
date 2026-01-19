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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Development",
    icon: mobile,
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
      "Taught core backend development concepts, including REST APIs, relational databases, and server-side application design.",
      "Guided 40+ students in applying OOP principles, data structures, and clean coding practices across multiple assignments.",
      "Assisted students in debugging application logic, SQL queries, and API integrations in an Agile-style workflow",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Intellect Design Arena",
    icon: IDA,
    iconBg: "#383E56",
    date: " October 2019 - August 2023",
    points: [
      "Developed and maintained 12+ backend microservices using Java 8, Spring Boot, JDBC, and REST APIs, supporting enterprise banking workflows across 3+ business modules with secure authentication and role-based access controls.",

      "Implemented scalable data access layers using JDBC and Hibernate, integrating Oracle and MySQL, and handling 2M+ records across transactional and reference datasets while ensuring high availability and consistent response times.",

      "Created 250+ unit and integration test cases using JUnit, strengthening release stability and preventing recurring regressions across monthly production deployments through structured test suites and CI validation runs.",

      "Partnered with QA and product teams to triage 40+ defects per release cycle, performing root cause analysis and delivering hotfixes within 24–72 hours to ensure uninterrupted services for critical banking operations.",
      "Participated in 80+ sprint ceremonies, including planning, grooming, code reviews, and architecture discussions, improving delivery predictability for Agile scrum teams while mentoring juniors and aligning technical priorities daily.",

      "Built Python utilities (6+ scripts) for log analytics and anomaly detection, scanning 10K+ daily log lines to flag runtime failures and performance spikes using scheduled runs and standardized alerting formats.",
      "Developed and optimized 30+ SQL queries and 15+ PL/SQL stored procedures in Oracle to support transaction processing,reconciliation, and audit-ready reporting with optimized indexing and performance-tuned execution plans.",
      
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Intellect Design Arena",
    icon: IDA,
    iconBg: "#FFFFFF",
    date: " August 2018 - October 2019",
    points: [
      "Developed 6+ backend modules using Java, Spring (MVC/Boot), and JDBC in a layered architecture, supporting transaction workflows.",

      "Optimized 25+ SQL queries and 10+ stored procedures to process 1,000+ daily transactions with audit tracking.",

      "Collaborated with cross-functional teams in Agile sprints to deliver features on time and enhance application performance.",
      "Fixed 15+ production defects by debugging logs and resolving SQL/JDBC issues with QA, closing tickets in under 2 days.",
      "Deployed builds on Tomcat and managed 20+ Maven builds via CI pipelines, ensuring consistent deployments across DEV/UAT .",
      "Leveraged AWS services (S3, EC2) to store build artifacts/logs and support application deployment testing across environments.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Adani",
    icon: meta,
    iconBg: "#383E56",
    date: " July 2017 - May 2018",
    points: [
      "Assisted in developing 3+ internal web components using JavaScript and React, improving usability for 15+ daily users.",
      "Optimized 10+ SQL queries to support data extraction and validation, helping generate weekly reports for 2+ stakeholders.",
      "Supported closing 12+ bugs/tickets by reproducing issues, debugging logs, and coordinating fixes with senior engineers.",
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
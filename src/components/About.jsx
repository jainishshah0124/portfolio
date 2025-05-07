import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services,image } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-2 flex gap-10 text-secondary text-[17px] max-w-1xl leading-[30px]'
      >
        <Tilt className='xs:w-[250px] w-full'>
          <motion.div
            variants={fadeIn("right", "spring", 0 * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
          >
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
              style={{width: '246px'}}>
              
              <img
                src={image}
                alt='web-development'
                style={{'max-width': '150%'}}
              />
            </div>
          </motion.div>
        </Tilt>
      <div>I am a results-driven MS in Computer Science candidate at California State University, Fullerton, graduating in May 2025, actively seeking full-time software engineering roles. With experience as a Senior Software Engineer at Intellect Design Arena, I have led teams, optimized CI/CD pipelines, and delivered scalable banking solutions. Additionally, as a Teaching Associate at CSU Fullerton, I have instructed Web Backend Engineering (CPSC 449), covering Python, Flask, FastAPI, and cloud computing.

      I specialize in Python, Golang, Java, JavaScript, and cloud technologies (AWS, Azure, GCP), with expertise in backend development, databases, distributed systems, and DevOps. My work includes designing microservices, RESTful APIs, containerized applications (Docker/Kubernetes), and scalable cloud architectures. I have also built innovative solutions such as a face-recognition-based attendance tracker and a DAO-based P2P lending platform.

      Recognized with the GEM Award for my contributions at Intellect Design Arena, I bring a blend of industry experience and academic excellence (GPA: 3.9/4.0). Passionate about problem-solving and software scalability, I am eager to contribute to cutting-edge projects in software engineering, cloud computing, or backend systems.</div>
      {/* I am a results-driven computer science master's student at Cal State Fullerton and a Senior Software Engineer at Intellect Design Arena. With experience in guiding teams, implementing CI/CD, and managing key banking projects, I excel in both independent and collaborative settings. I've achieved a 40% increase in online sales, developed user-friendly e-commerce platforms, and enhanced project efficiency. Currently pursuing an MS in Computer Science, my focus includes Advanced Database, Algorithm, Web-Backend, and Modern Software Management. Proficient in Python, Golang, Java, and JavaScript, I bring expertise in cloud computing, database management, and infrastructure. Certified in Java, Python, and SQL, I was honored with the GEM Award for Best Performance at Intellect Design Arena. Explore my portfolio for innovative solutions and a commitment to excellence in computer science! */}
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
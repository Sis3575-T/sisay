import { motion } from 'framer-motion';
import profilePhoto from '../assets/images/profile-photo.jpg';
import './About.css';

const About = () => {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              I am a passionate software developer student with a strong interest in React, JavaScript, and modern web development. I enjoy building applications while continuously improving my skills.
            </p>
            <p>
              Currently pursuing my studies at Bahir Dar University, I am dedicated to becoming a proficient front-end developer. My journey involves learning cutting-edge technologies and applying them to create meaningful digital experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or learning about the latest trends in web development.
            </p>
          </motion.div>
          <motion.div
            className="about-image"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src={profilePhoto}
              alt="Portfolio profile"
              className="profile-image"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
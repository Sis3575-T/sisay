import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <motion.section
      className="hero"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Full Stack Developer
        </motion.div>
        <motion.p
          className="hero-subtitle"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
         Computer Science student Student at Bahir Dar University | Aspiring Full Stack Developer | 
        </motion.p>
        <motion.p
          className="hero-description"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Passionate software developer student with a strong interest in React, JavaScript, and modern web development,AI machin learning. I enjoy building applications while continuously improving my skills.
        </motion.p>
        <motion.div
          className="hero-buttons"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Get In Touch</a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
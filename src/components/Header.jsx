import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="brand">
        <span className="brand-mark">ST</span>
        <div>
          <p className="brand-label">Sisay Temesgen</p>
          <p className="brand-subtitle">Aspiring Full Stack Developer | AI Machine Learning</p>
        </div>
      </div>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </motion.header>
  );
};

export default Header;
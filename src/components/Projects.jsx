import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Student Online Registration System',
      description: 'Designed system requirements and documented project structure for an online student registration system.',
      tech: ['HTML', 'CSS'],
      link: '#'
    },
    {
      title: 'Responsive Portfolio Website',
      description: 'Built and deployed my personal portfolio using HTML, CSS, and JavaScript with responsive design.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: '#'
    },
    {
      title: 'React Chat Application',
      description: 'Built a simple chat interface using React components and state management.',
      tech: ['React', 'JavaScript'],
      link: '#'
    },
    {
      title: 'React Counter',
      description: 'Created reusable components and implemented dynamic updates with React.',
      tech: ['React', 'JavaScript'],
      link: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section
      className="projects"
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <h2>Projects</h2>
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project</a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
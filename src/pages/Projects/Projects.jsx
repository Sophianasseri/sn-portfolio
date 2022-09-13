import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projects from '../../data/data';
import styles from './projects.module.css';

function Projects() {
  // farmer-motion card animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div>
      <h2>MES PROJETS</h2>
      <motion.div
        className={styles.cardContainer}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            projectType={project.type}
            codeLink={project.repo}
            projectLink={project.link}
          >
            {project.icons.map((icon) => (
              <img
                key={icon}
                className={styles.icon}
                src={process.env.PUBLIC_URL + icon}
                alt=""
              />
            ))}
          </ProjectCard>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;

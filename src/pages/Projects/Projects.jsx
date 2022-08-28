import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projects from '../../data/data';
import styles from './projects.module.css';

function Projects() {
  return (
    <div>
      <h2>MES PROJETS</h2>
      <div className={styles.cardContainer}>
        {projects.map((project) => (
          <ProjectCard
            title={project.title}
            projectType={project.type}
            codeLink={project.repo}
            projectLink={project.link}
          >
            {project.icons.map((icon) => (
              <img className={styles.icon} src={icon} alt="" />
            ))}
          </ProjectCard>
        ))}
      </div>
    </div>
  );
}

export default Projects;

/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from './projetCard.module.css';

// eslint-disable-next-line object-curly-newline
function ProjectCard({ projectType, title, children, codeLink }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <div
      className={styles.card}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <p
        className={`${styles.type} ${
          projectType === 'UX Design' ? styles.ux : styles.dev
        }`}
      >
        <span className={styles.dot} />
        {projectType}
      </p>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.icon}>{children}</div>
      {isHovering && codeLink && (
        <a href={codeLink} target="blank">
          CODE DU PROJET
        </a>
      )}
    </div>
  );
}

export default ProjectCard;

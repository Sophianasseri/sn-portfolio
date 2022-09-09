/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './projetCard.module.css';
import githubLogo from '../../assets/github.svg';
import siteLogo from '../../assets/world.svg';
// eslint-disable-next-line object-curly-newline
function ProjectCard({ projectType, title, children, codeLink, projectLink }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  // Framer motion animation for cards
  const childrenVariants = {
    hidden: { opacity: 0, translateX: '-50', translateY: '-50' },
    visible: {
      opacity: 1,
      translateY: 0,
      translateX: 0,
      transition: {
        duration: 0.2,
        type: 'tween',
        ease: 'easeOut',
      },
    },
  };

  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <motion.div
      className={styles.card}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      variants={childrenVariants}
    >
      <p
        className={`${styles.type} ${
          projectType === 'UX Design' ? styles.ux : styles.dev
        }`}
      >
        <span
          className={`${styles.dot} ${
            projectType === 'UX Design' ? styles.uxDot : styles.devDot
          }`}
        />
        {projectType}
      </p>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.icon}>{children}</div>
      {isHovering && (
        <>
          <div className={styles.overlay} />
          <div className={styles.linksContainer}>
            {codeLink && (
              <a className={styles.link} href={codeLink} target="blank">
                <img className={styles.linkImg} src={githubLogo} alt="" />
                CODE DU PROJET
              </a>
            )}
            {projectLink && (
              <a className={styles.link} href={projectLink} target="blank">
                <img className={styles.linkImg} src={siteLogo} alt="" />
                VOIR LE PROJET
              </a>
            )}
          </div>
        </>
      )}
    </motion.div>
  );
}

export default ProjectCard;

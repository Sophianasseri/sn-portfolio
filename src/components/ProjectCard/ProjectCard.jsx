import React from 'react';

function ProjectCard(projectType, imgSrc, imgAlt, children) {
  return (
    <div>
      <p>{projectType}</p>
      <img src={imgSrc} alt={imgAlt} />
      {children}
    </div>
  );
}

export default ProjectCard;

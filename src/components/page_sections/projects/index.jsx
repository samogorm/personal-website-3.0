import React from 'react';

import Text from './../../text';
import ProjectBlock from './../../project_block';

import './index.scss';

const Projects = ({ items }) => (
  <section id="projects" className="projects">
    <Text
      text="Projects"
      tag="h2"
      size="xxl"
    />
    <div className="projects__grid">
      { items.map(project => 
        <ProjectBlock
          key={project.id}
          title={project.title}
          description={project.description}
          sourceLink={project.links.source}
          demoLink={project.links.demo}
          icon={project.icon}
          tags={project.tags} 
        />
      ) }
    </div>
  </section>
);

export default Projects;

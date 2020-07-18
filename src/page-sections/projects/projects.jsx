import React from 'react';

import Title from './../../components/title';
import ProjectBlock from './../../components/project_block';
import { ProjectsContent } from './../../static-content/ProjectsContent';

import './projects.scss';

const Projects = () => (
  <section id="projects" className="projects">
    <Title text="Projects" />
    <div className="projects__grid">
      { ProjectsContent.map(project => 
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

import React from 'react';

import Title from './../../components/title/title';
import Paragraph from './../../components/paragraph/paragraph';
import ProjectBlock from './../../components/project_block/project_block';
import { ProjectsContent } from './../../static-content/ProjectsContent';

import './projects.scss';

const Projects = () => (
  <section id="projects" className="projects">
    <div className="projects__title">
      <Title text="Projects" />
      <Paragraph
        text="I like to keep my skills up to date by making small, open-source apps using my favourite technologies."
      />
    </div>
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

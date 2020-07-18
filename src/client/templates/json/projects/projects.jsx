import React from 'react';
import { graphql } from 'gatsby';

import Text from './../../components/text';
import ProjectBlock from './../../components/project_block';
import { ProjectsContent } from './../../static-content/ProjectsContent';

import './projects.scss';

const Projects = ({ data }) => (
  <section id="projects" className="projects">
    <Text
      text="Projects"
      tag="h2"
      size="xxl"
    />
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

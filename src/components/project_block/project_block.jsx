import React from 'react';

import Button from './../button/button'
import Paragraph from '../paragraph/paragraph';
import Title from '../title/title';
import Tag from '../tag/tag';

import './project_block.scss'

const ProjectBlock = ({ title, description, tags, sourceLink, demoLink }) => {
  return (
    <div className="project-block">
      <div className="project-block__container">
        <div className="project-block__header">
          <Title
            text={ title }
            tag="h4"
          />
          <div className="project-block__tags">
            {tags.map((tag, index) => (
              <Tag
                key={index}
                text={ index === tags.length - 1 ? tag : `${tag}, `}
              />
            ))}
          </div>
        </div>
        <div className="project-block__description">
          <Paragraph
            text={ description }
            colour="black"
          />
        </div>
        <div className="project-block__footer">
          <Button
            label="View source"
            icon="fas fa-code"
            type="fill"
            url={ sourceLink }
            colour="black"
          />
          <Button
            label="View demo"
            icon="fas fa-arrow-right"
            type="fill"
            colour="blue"
            url={ demoLink }
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectBlock;

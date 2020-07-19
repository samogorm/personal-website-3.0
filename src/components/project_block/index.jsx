import React from 'react';

import Button from './../button'
import Text from '../text';

import './index.scss'

const ProjectBlock = ({ title, description, tags, sourceLink, demoLink }) => {
  return (
    <div className="project-block">
      <div className="project-block__container">
        <div className="project-block__header">
          <Text
            text={ title }
            tag="h4"
            size="m"
          />
          <div className="project-block__tags">
            {tags.map((tag, index) => (
              <Text
                key={index}
                text={ index === tags.length - 1 ? tag : `${tag}, `}
                tag="span"
                font="mono"
                colour="steel"
                size="xxs"
              />
            ))}
          </div>
        </div>
        {/* <div className="project-block__description">
          <Text
            text={ description }
            colour="black"
            tag="p"
            size="s"
            weight="default"
          />
        </div> */}
        <div className="project-block__footer">
          <Button
            label="Code"
            icon="fas fa-code"
            type="fill"
            url={ sourceLink }
            colour="black"
          />
          <Button
            label="Demo"
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

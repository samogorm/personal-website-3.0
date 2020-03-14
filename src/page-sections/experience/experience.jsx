import React from 'react';

import Title from './../../components/title/title';
import ExpandableContent from '../../components/expandable_content/expandable_content';

import { ExperienceContent } from './../../static-content/ExperienceContent';

import './experience.scss';

const Experience = () => (
  <section id="experience" className="experience">
    <div className="experience__title">
      <Title
        text="Experience"
      />
    </div>
    <div className="experience__content">
      { ExperienceContent.map(({ id, jobTitle, at, dateFrom, dateTo, duties }) => (
        <ExpandableContent
          key={`experience-${id}`}
          title={ jobTitle }
          secondTitle={ at }
          subtitle={ `${dateFrom} - ${dateTo}`}
          content={ duties }
        />
      ))}
    </div>
  </section>
);

export default Experience;

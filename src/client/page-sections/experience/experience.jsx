import React from 'react';

import Text from './../../components/text';
import ExpandableContent from '../../components/expandable_content';
import { ExperienceContent } from './../../static-content/ExperienceContent';

import './experience.scss';

const Experience = () => (
  <section id="experience" className="experience">
    <Text
      text="Experience"
      tag="h2"
      size="xxl"
    />
    <div className="experience__content">
      { ExperienceContent.reverse().map(({ id, jobTitle, at, dateFrom, dateTo, duties }) => (
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

import React from 'react';

import Text from './../../text';
import ExpandableContent from '../../expandable_content';

import './index.scss';

const Experience = ({ items }) => (
  <section id="experience" className="experience">
    <Text
      text="Experience"
      tag="h2"
      size="xxl"
    />
    <div className="experience__content">
      { items.reverse().map(({ id, job_title, at, dates, duties }) => (
        <ExpandableContent
          key={`experience-${id}`}
          title={ job_title }
          secondTitle={ at }
          subtitle={ `${dates.from} - ${dates.to}`}
          content={ duties }
        />
      ))}
    </div>
  </section>
);

export default Experience;

import React from 'react';

import Paragraph from './../../components/paragraph/paragraph';
import Title from './../../components/title/title';
import { AboutContent } from './../../static-content/AboutContent';


import './introduction.scss';

const Introduction = () => (
  <section className="introduction">
    <div className="introduction__wrapper">
      <Title
        text={ AboutContent.intro.title }
        tag="h1"
      />
      <div className="introduction__text">
        <Paragraph
          text={ AboutContent.intro.text }
          colour="black"
        />
      </div>
      <div className="introduction__status">
        <Paragraph
          text="Currently..."
          colour="black"
        />
        { AboutContent.intro.status.map((item, index) => (
          <Paragraph
            key={`status-${index}`}
            text={ item }
            colour="black"
          />
        ))}
      </div>
   </div>
  </section>
);

export default Introduction;

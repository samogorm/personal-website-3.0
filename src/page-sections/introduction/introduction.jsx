import React from 'react';

import Subtitle from './../../components/subtitle/subtitle';
import Button from './../../components/button/button';
import Paragraph from './../../components/paragraph/paragraph';
import Title from './../../components/title/title';
import { AboutContent } from './../../static-content/AboutContent';

import './introduction.scss';

const Introduction = () => (
  <section className="introduction">
    <div className="introduction__wrapper">
      <Subtitle
        text={AboutContent.intro.title}
        colour="steel"
      />
      <Title
        text={ AboutContent.intro.name }
        colour="white"
      />
      <Title
        text={AboutContent.intro.subtitle}
        colour="green"
      />
      <div className="introduction__text-wrapper">
        <Paragraph
          text={AboutContent.intro.text}
          colour="steel"
        />
      </div>
      <div className="introduction__buttons">
        <Button
          label="Learn more"
          icon={null}
          type="fill"
          colour="green"
          url="#about"
          scrollTo
        />

        <Button
          label="Let's Chat"
          icon="fas fa-comment"
          type="outline"
          colour="green"
          url="#contact"
          scrollTo
        />
      </div>
   </div>
  </section>
);

export default Introduction;

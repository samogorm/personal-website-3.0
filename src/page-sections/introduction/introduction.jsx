import React from 'react';

import Subtitle from './../../components/subtitle/subtitle';
import Button from './../../components/button/button';
import Paragraph from './../../components/paragraph/paragraph';
import Title from './../../components/title/title';
import { AboutContent } from './../../static-content/AboutContent';
import { SocialMediaContent } from './../../static-content/SocialMediaContent';

import './introduction.scss';

const Introduction = () => (
  <section className="introduction">
    <div className="introduction__wrapper">
      <Subtitle
        text={AboutContent.intro.title}
        colour="blue"
      />
      <Title
        text={ AboutContent.intro.name }
      />
      <Title
        text={AboutContent.intro.subtitle}
        colour="steel"
      />
      <div className="introduction__text-wrapper">
        <Paragraph
          text={AboutContent.intro.text}
          colour="steel"
        />
      </div>
      <div className="introduction__social-icons">
        {SocialMediaContent.map(({ url, icon }, index) => {
          return (
            <a key={index} className="social-media-icon" href={ url }>
              <i className={ icon }></i>
            </a>
          )
        })}
      </div>
      <div className="introduction__buttons">
        <Button
          label="Let's Chat"
          icon="fas fa-comment"
          type="fill"
          colour="blue"
          url="#contact"
          scrollTo
        />
      </div>
   </div>
  </section>
);

export default Introduction;

import React from 'react';

import Avatar from './../../components/avatar/avatar';
import Paragraph from './../../components/paragraph/paragraph';
import Title from '../../components/title/title';
import ListGroup from '../../components/list_group/list_group';
import { AboutContent } from './../../static-content/AboutContent';
import avatar from './../../assets/images/sam.jpg';

import './about.scss';

const About = () => (
  <section id="about" className="about">
    <div className="about__title">
      <Title
        text="About"
      />
    </div>
    <div className="about__content">
      <div className="about__text">
        { AboutContent.about.textBlocks.map((block, index) => (
          <Paragraph
            key={ index }
            text={ block }
            colour="navy"
          />
        )) }
        <ListGroup
          items={ AboutContent.about.tools }
        />
      </div>
      <div className="about__avatar">
        <Avatar src={ avatar } alt="Picture of Sam's face." />
      </div>
    </div>
  </section>
);

export default About;

import React from 'react';

import Text from './../../components/text';
import { AboutContent } from './../../static-content/AboutContent';

import './introduction.scss';

const Introduction = () => (
  <section className="introduction">
    <div className="introduction__wrapper">
      <Text
        text={ AboutContent.intro.title }
        tag="h1"
        size="xxl"
      />
      <div className="introduction__text">
        <Text
          text={ AboutContent.intro.text }
          colour="black"
          tag="p"
          size="s"
          weight="default"
        />
      </div>
   </div>
  </section>
);

export default Introduction;

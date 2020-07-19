import React from 'react';

import Text from './../../text';

import './index.scss';

const Introduction = ({ title, text }) => (
  <section className="introduction">
    <div class="introduction__background"></div>
    <div className="introduction__wrapper">
      <Text
        text={ title }
        tag="h1"
        size="xxl"
        colour="white"
      />
      <div className="introduction__text">
        <Text
          text={ text }
          colour="black"
          tag="p"
          size="s"
          weight="default"
          colour="white"
        />
      </div>
    </div>
  </section>
);

export default Introduction;
import React from 'react'

// Custom Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Title} from './../components/title/Title'
import {Subtitle} from './../components/subtitle/Subtitle'
import {Paragraph} from './../components/paragraph/Paragraph'
import {Button} from './../components/button/Button'

// Static Content
import {AboutContent} from './../static-content/AboutContent'

// Constants
import {themeColours} from './../constants/themeColours';

import './../assets/styles/index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="intro-section">
      <div className="introduction">
        <Subtitle text={AboutContent.intro.title} />
        <Title text={AboutContent.intro.subtitle} />
        <Paragraph text={AboutContent.intro.text} />
        <div className="information-buttons">
            <Button 
              label="Learn more" 
              icon={null} 
              type="fill" 
              primaryColour={themeColours[4].hex}
              secondaryColour="#fff"
            />

          <Button
            label="Let's Chat"
            icon={null}
            type="outline"
            primaryColour="transparent"
            secondaryColour={themeColours[4].hex}
          />
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage

import React from 'react'

// Custom Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Title} from './../components/title/Title'
import {Subtitle} from './../components/subtitle/Subtitle'
import {Paragraph} from './../components/paragraph/Paragraph'
import {Button} from './../components/button/Button'
import {Avatar} from './../components/avatar/Avatar'
import {SkillBlock} from './../components/skill-block/SkillBlock'

// Static Content - later we will use an API to get this data.
import {AboutContent} from './../static-content/AboutContent'
import {SkillsContent} from './../static-content/SkillsContent'
import {ProjectsContent} from './../static-content/ProjectsContent'

// Constants
import {themeColours} from './../constants/themeColours';

import './../assets/styles/index.css'

import avatar from './../assets/images/sam.jpg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* Introduction */}
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

    {/* About */}
    <section className="about-section">
      <div className="about-content">
        <div className="about-avatar">
          <Avatar src={avatar} alt="Picture of Sam's face." />
        </div>
        <div className="about-text">
          { AboutContent.about.textBlocks.map((block, index) => <Paragraph key={index} text={block} />) }
        </div>
      </div>
    </section>

    {/* Skills & Expertise */}
    <section className="skills-and-expertise">
      <div className="skills-title">
        <Title text="Skills &amp; Expertise" />
        <Paragraph text="My passion and enthusiasm for coding has lead me to learn and use a multitude of technologies for side projects and professional work." />
      </div>
      <div className="skills-grid">
        { SkillsContent.map(block => <SkillBlock key={block.id} icon={block.icon} title={block.title} subtitle={block.subtitle} />) }
      </div>
    </section>

    {/* Projects */}
    <section className="projects-section">
      <div className="projects-title">
        <Title text="Projects" />
        <Paragraph text="In my spare time, I like to keep my skills up to date by making small, open-source apps using my favourite technology." />
      </div>
      <div className="projects-grid">
        { ProjectsContent.map(project => console.log(project)) }
      </div>
    </section>
  </Layout>
)

export default IndexPage

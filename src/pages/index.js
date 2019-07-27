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
import {ProjectBlock} from './../components/project-block/ProjectBlock'
import {CallToAction} from './../components/call-to-action/CallToAction';

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
              icon="fas fa-comment"
              type="outline"
              primaryColour="transparent"
              secondaryColour={themeColours[4].hex}
            />
        </div>
      </div>
    </section>

    {/* About */}
    <section id="about" className="about-section">
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
    <section id="skills-and-expertise" className="skills-and-expertise">
      <div className="skills-title">
        <Title text="Skills &amp; Expertise" />
        <Paragraph text="My passion and enthusiasm for coding has lead me to learn and use a multitude of technologies for side projects and professional work." />
      </div>
      <div className="skills-grid">
        { SkillsContent.map(block => <SkillBlock key={block.id} icon={block.icon} title={block.title} subtitle={block.subtitle} />) }
      </div>
    </section>

    {/* Projects */}
    <section id="projects" className="projects-section">
      <div className="projects-title">
        <Title text="Projects" />
        <Paragraph text="I like to keep my skills up to date by making small, open-source apps using my favourite technology." />
      </div>
      <div className="projects-grid">
        { ProjectsContent.map(project => <ProjectBlock key={project.id} title={project.title} description={project.description} sourceLink={project.links.source} demoLink={project.links.demo} icon={project.icon} tags={project.tags} />) }
      </div>
    </section>

    {/* Call to Action */}
    <section className="call-to-action-section">
      <CallToAction title="I’m always up for a chat, if you want to collaborate on something just get in touch" buttonLabel="Let's Chat" buttonIcon="fas fa-comment" />
    </section>
  </Layout>
)

export default IndexPage

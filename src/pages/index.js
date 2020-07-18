import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { usePlugin } from 'tinacms';
import { useJsonForm } from 'gatsby-tinacms-json';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Introduction from '../components/page_sections/introduction';
import Experience from '../components/page_sections/experience';
import Projects from '../components/page_sections/projects';
import Contact from '../components/page_sections/contact/contact';

const IndexPage = () => {
  const content = useStaticQuery(graphql`
    query {
      dataJson {
        data {
          intro {
            title
            text
          }
          projects {
            id
            title 
            description
            links {
              demo
              source
            }
            tags
          }
          experience {
            id
            job_title 
            at
            dates {
              from
              to
            },
            duties
          }
          social_platforms {
            id
            icon
            title
            url
          }
        }

        rawJson
        fileRelativePath
      }
    }
  `);

  const [data, form] = useJsonForm(content.dataJson, {
    label: "Homepage",
    fields: [
      { component: "text", name: "rawJson.data.intro.title", label: "Title" },
      { component: "markdown", name: "rawJson.data.intro.text", label: "Subtitle" },
      {
        component: "group-list",
        name: "rawJson.data.projects",
        label: "Projects",
        fields: [
          { component: "text", name: "id", label: "ID" },
          { component: "text", name: "title", label: "Title" },
          { component: "markdown", name: "description", label: "Description" },
          { component: "text", name: "links.demo", label: "Demo URL" },
          { component: "text", name: "links.source", label: "Source URL" },
        ]
      },
      {
        component: "group-list",
        name: "rawJson.data.experience",
        label: "Experience",
        "fields": [
          { component: "text", name: "id", label: "ID" },
          { component: "text", name: "job_title", label: "Job Title" },
          { component: "text", name: "at", label: "At" },
          { component: "text", name: "dates.from", label: "Date From" },
          { component: "text", name: "dates.to", label: "Date To" },
        ]
      },
      {
        component: "group-list",
        name: "rawJson.data.social_platforms",
        label: "Social Icons",
        "fields": [
          { component: "text", name: "id", label: "ID" },
          { component: "text", name: "icon", label: "Icon" },
          { component: "text", name: "title", label: "Title" },
          { component: "text", name: "url", label: "URL" },
        ]
      }
    ]
  });

  usePlugin(form);

  return (
    <Layout>
      <SEO title="Home" />
      <Introduction
        title={ data.data.intro.title }
        text={ data.data.intro.text }
      />
      <Projects items={ data.data.projects } />
      <Experience items={ data.data.experience } />
      <Contact socialItems= {data.data.social_platforms } />
    </Layout>
  );
};

export default IndexPage;

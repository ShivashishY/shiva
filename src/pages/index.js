import React, { useMemo } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Posts from '../components/Posts'
import ContactForm from '../components/ContactForm'
import Projects from '../components/Projects'
import SEO from '../components/SEO'
import Blurb from '../components/Blurb'
import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'
import projects from '../data/projects'
import ScrollToTop from "react-scroll-up"


export default function BlogIndex({ data }) {
  const latest = data.latest.edges
  const popular = data.popular.edges
  const simplifiedLatest = useMemo(() => getSimplifiedPosts(latest), [latest])
  const simplifiedPopular = useMemo(() => getSimplifiedPosts(popular), [
    popular,
  ])

  const Section = ({ title, children, button, ...props }) => (
    <section {...props}>
      <h2 className="section-title">
        {title}
        {button && (
          <Link className="section-button" to="/blog">
            View all
          </Link>
        )}
      </h2>
      {children}
    </section>
  )

  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <Blurb title="Namaste, I'm Shivashish">
        <p>
        I'm glad you're here! I'm a software engineer and writer. This website is my digital space.
          &mdash; I write to express.
          </p> 
         <p> You can find {' '}
         <Link to="/blog"> blog posts </Link> about Code, Product & Tech Policy. 
          You can read my {' '}
          <Link to="/guides">guides & codelabs </Link>, or know more {' '}
          <Link to="/about">about me</Link>.
        </p>
        <a href="https://twitter.com/ShivashishYadav" class="twitter-follow-button" data-size="large" data-text="Follow me" data-show-count="true">Follow @ShivashishYadav</a>

      </Blurb>
      <div className="container index">
        <Section title="Latest Articles." button>
          <Posts data={simplifiedLatest} />
        </Section>
        <Section title="Popular Articles." button>
          <Posts data={simplifiedPopular} />
        </Section>
        <Section title="Projects.">
          <Projects data={projects} />
        </Section>
        <Section title="Newsletter.">
          <div className="flex">
            <p className="paragraph">
              I send out an email when I create something new. I'm never going
              to spam you, and you can unsubscribe any time.
            </p>
            <a
              href="https://shivashishyadav.substack.com/subscribe"
              target="_blank"
              rel="noreferrer"
              className="button"
              style={{ textAlign: 'center', marginLeft: '.5rem' }}
            >
              Get the newsletter
            </a>
          </div>
        </Section>
        <section title="Contact" className="button">
         <header className="major">
        <h2>Contact Me.</h2>
        <ContactForm action="https://www.flexyform.com/f/c78dba7b2fc637f4140b445f96c1d1823c89e36f"></ContactForm>
    </header>
</section>
      </div>
      <ScrollToTop showUnder={160}>
                            <span class="largefont">Top</span>
        </ScrollToTop>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 20
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`

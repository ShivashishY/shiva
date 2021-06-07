import React from 'react'
import { Link } from 'gatsby'


import gatsby from '../../content/thumbnails/gatsby.png'
import github from '../../content/thumbnails/github.png'

export default function Footer() {
  return (
    <footer className="footer flex">
      <section className="container">
        <nav className="footer-links">
          <Link to="/blog">Blog</Link>
          <Link to="/guides">Guides</Link>
          <a
            href="https://shivashishyadav.substack.com//subscribe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Newsletter
          </a>
          <Link to="/rss.xml">RSS</Link>
          <a
            href="https://ko-fi.com/shivashish"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate
          </a>
          <a
            href="https://patreon.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Patreon
          </a>
        </nav>
        <nav className="flex justify-center">
          <a
            href="https://www.gatsbyjs.org/"
            title="Built with Gatsby"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={gatsby} className="footer-img" alt="Gatsby" />
          </a>
          <a
            href="https://github.com/"
            title="Open-source on GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={github} className="footer-img" alt="GitHub" />
          </a>
        </nav>
      </section>
    </footer>
  )
}

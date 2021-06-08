import React from 'react'
import { Link } from 'gatsby'


import gatsby from '../../content/thumbnails/gatsby.png'
import github from '../../content/thumbnails/github.png'
import javascript from '../../content/thumbnails/javascript.png'
import css from '../../content/thumbnails/css3.png'
import react from '../../content/thumbnails/react.png'

export default function Footer() {
  return (
    <footer className="footer flex">
      <section className="container">
      <div className="lets-connect"><h4>Let's connect</h4></div>
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
          <a
            href="https://twitter.com/ShivashishYadav"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.facebook.com/shivashish.ydv"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/shivashish.yadav/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
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
          <a
            href="https://javascript.com/"
            title="Java Script"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={javascript} className="footer-img" alt="Javascript" />
          </a>

          <a
            href="https://css.com/"
            title="CSS3"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={css} className="footer-img" alt="CSS3" />
          </a>

          <a
            href="https://reactjs.org/"
            title="ReactJS"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={react} className="footer-img" alt="ReactJS" />
          </a>
          
        </nav>
        <div class="namefooter">
        <hr/>
            <br/>
            © {new Date().getFullYear()}❤️, Shivashish Yadav
            </div>
      </section>
    </footer>
  )
}

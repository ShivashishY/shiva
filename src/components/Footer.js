import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
  return (
    <footer className="footer flex">
      <section className="container">
      <div className="lets-connect"><h3>Let's connect</h3></div>
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
        <div className="namefooter">
        <hr/>
            <br/>
            © {new Date().getFullYear()}❤️, Shivashish Yadav
            </div>
      </section>
    </footer>
  )
}

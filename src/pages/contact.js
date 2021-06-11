import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ContactForm from '../components/ContactForm'


const ContactPage = () => (
  <Layout>
   <header>
        <div className="container">
          <h1>Contact Me</h1>
          <p className="subtitle">
          If you have any comments, ideas, critiques, or you just want to say hi, don't hesitate to send me an email at <a href="mailto:responsetoshivani@gmail.com">responsetoshivani@gmail.com</a>
          </p>
          <h2>Around the web</h2>
          <ul>
          <li><strong>Github:</strong><a href="https://github.com/ShivashishY">[ShivashishY]</a></li>
   <li><strong>Twitter:</strong> <a href="https://twitter.com/ShivashishYadav">[ShivashishYadav]</a></li>
   <li><strong>Linkedin:</strong><a href="https://www.linkedin.com/in/shivashishyadav/">[shivashishyadav]</a></li>
  <li><strong>Facebook:</strong><a href="https://www.facebook.com/shivashish.ydv/">[shivashish.ydv]</a></li>
  <li><strong>Feed:</strong><a href="https://shivas.gtsb.io/rss.xml">[RSS]</a></li>
  <li><strong>Ko-Fi:</strong><a href="https://ko-fi.com/shivashish">[shivashish]</a></li>

    </ul>
        </div>
      </header>





    <ContactForm action="https://www.flexyform.com/f/c78dba7b2fc637f4140b445f96c1d1823c89e36f"></ContactForm>

    {/* Currently, the best way to reach out to me is on Twitter or LinkedIn. I look forward to hearing from you! */}

  </Layout>
)

export default ContactPage

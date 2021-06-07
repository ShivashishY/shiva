import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import config from '../utils/config'
import chatter from '../../content/images/chatter.png'
import codingbuddy from '../../content/images/codingbuddy.png'
import covidv from '../../content/images/covidv.png'
import cbide from '../../content/images/cbide.png'

export default function ProjectsIndex() {
  return (
    <Layout>
      <Helmet title={`Projects | ${config.siteTitle}`} />
      <SEO />
      <div className="container page">
        <header>
          <h1>Projects.</h1>
          <p className="subtitle">
            A few highlights of my open-source projects. View them all{' '}
            <a href="https://github.com/shivashishy">on GitHub</a>.
          </p>
        </header>

        <section>
          <h2>Chatter</h2>
          <h4 className="no-underline">
            A free, open source web chat app.
          </h4>
          <p>
            <small>
              <i>
              <ul>
                      <li>Web framework: Express</li>
                        <li>JavaScript Library: jQuery V-2.2.2</li>
                        <li>Web Servers: Express, Cowboy</li>
                        <li>Paas: Heroku</li>
                        <li>UI framework: Bootstrap V-3.3.6</li>
                        <li>Programming Language : Node.js</li>
              </ul>
              </i>
            </small>
          </p>
          <a href="https://chatterme.herokuapp.com/" className="link-image" target="_blank">
            <img src={chatter} />
          </a>
          <p>
            I built this app because I wanted to understand how chatting apps mechanism works
            like whatsapp and other apps i wanted a simpler, IDE-like, program that would be accessible from any platform via
            the web. I also wanted it to sync without creating users or
            requiring a database. so i created this.
          </p>
          <p>
            The app allows you to chat with annyonomus name, you can create room and chat with different people at the same time
            you can send emoji, smilies and image attaching to the chat, chat are non encrypted, i need to study more about security
            and how to implement it. but without encryption and security its complete chat app.
          </p>

    
          <a href="https://github.com/ShivashishY/Chatter" className="button">
            Source
          </a>
          <a href="https://chatterme.herokuapp.com/" className="button">
            Demo
          </a>
        </section>

        <section>
          <h2>CodingBuddy IDE</h2>
          <h4 className="no-underline">
            Online Compiler for codes which supports more then 18 languages
          </h4>
          <p>
            <small>
            <ul>
                      <li>Web framework: Express</li>
                        <li>JavaScript Library: jQuery V-3.4.1</li>
                        <li>Web Servers: Apache</li>
                        <li>Paas: Heroku</li>
                        <li>UI framework: Semantic UI</li>
                        <li>Programming Language : JavaScript, HTML, CSS</li>
              </ul>
            </small>
          </p>
          <a
            href="https://cbide.herokuapp.com/"
            className="link-image"
            target="_blank"
          >
            <img src={cbide} />
          </a>
          <p>
            CodingBuddy IDE was sub project of my college project, in CodingBuddy IDE you just need to copy-paste
            the codes and select language, pass the argument if you want and you can get output. this uses codesandbox and 
            API which support only 50 free occurence so need to reconfigure the codes to work. right now it may or may not work.
          </p>
          <p>
            CodingBuddyIDE supports more then 18 languge which it can compile, what it do inside that it sends the total code in cloud Compiler where
            it executes the code and Cloud Compiler sends back the output back to the CodingBuddyIDE which it displays in outputbox. 
          </p>
  
          <a href="https://github.com/ShivashishY/CodingBuddy-IDE" className="button">
            Source
          </a>
          <a href="https://cbide.herokuapp.com/" className="button">
            Demo
          </a>
        </section>

        <section>
          <h2>CodingBuddy</h2>
          <h4 className="no-underline">
            One stop solution for all coding need
          </h4>
          <p>
            <small>
              <i><ul>
                      <li>Web framework: Express</li>
                        <li>JavaScript Library: jQuery V-3.1.0, Socket.io</li>
                        <li>Web Servers: Express, Cowboy</li>
                        <li>Paas: Heroku</li>
                        <li>UI framework: Bootstrap V-3.3.7</li>
                        <li>Database: MongoDB</li>
                        <li>JavaScript Graphics: particle.js</li>
                        <li>Programming Language : Node.js, JavaScript, Handlebars</li>
              </ul></i>
            </small>
          </p>
          <a href="https://laconia.dev" className="link-image" target="_blank">
            <img src={codingbuddy} />
          </a>
          <p>
          In simple words, CodingBuddy is like GoogleDocs for programmers. 
          It allows you to work collaboratively on code with fellow engineers for interviews, 
          troubleshooting, teaching and more, no matter where you live.
          </p>
          <p>
            CodingBuddy supports audio, video and text chat, with real-time live code share window, you can create tasks, online compiler,
            you can create/login your account through Facebook authentication or with email id, live email support is also provided.
          </p>
          <a href="https://github.com/ShivashishY/CodingBuddy" className="button">
            Source
          </a>
          <a href="https://codingbuddy.herokuapp.com/" className="button">
            Demo
          </a>

          <h2>CovidV</h2>
          <h4 className="no-underline">
            Corona Virus tracking web app, includes heat map and global map of world
          </h4>
          <p>
            <i><ul>
                        <li>Web framework: Ruby on Rails</li>
                        <li>JavaScript Library: jQuery V-3.2.1</li>
                        <li>CDN: jsDelivr, Fastly</li>
                        <li>Paas: GitHub Pages</li>
                        <li>UI framework: Bootstrap V-4.4.1</li>
                        <li>Map: Mapbox GL JS</li>
                        <li>Caching: varnish</li>
                        <li>JavaScript Graphics: Chart.js</li>
                        <li>Programming Language : JavaScript, HTML</li>
              </ul></i>
          </p>
          <a
            href="https://covidv.github.io/"
            className="link-image"
            target="_blank"
          >
            <img src={covidv} />
          </a>
          <p>
          This project aims to visualise the live spread of COVID-19 virus Nobel Corona Virus.
          This projects helps in better visualisation of the spread of the virus as in Real Time.
          </p>
          <p>
          CovidV shows realtime monitoring of Recovered, Deceased and total cases of the countries, but it have seprate page for
          india's situation tracking it have heat map, global map, and color map of india based on cases.  
          Data sources are from: WHO, CDC, ECDC, NHC and DXY and local media reports. All the data are collected and maintained 
          by Center for Systems Science and Engineering at Johns Hopkins Whiting School of Engineering.

          </p>
          <a href="https://github.com/ShivashishY/covidv.github.io" className="button">
            Source
          </a>
          <a href="https://covidv.github.io/" className="button">
            Demo
          </a>
        </section>
      </div>
    </Layout>
  )
}

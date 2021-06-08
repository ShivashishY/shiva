import React, { useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { IoMdArrowBack } from 'react-icons/io'
import ScrollToTop from "react-scroll-up"

import Layout from '../components/Layout'
import Suggested from '../components/Suggested'
import SEO from '../components/SEO'
import Comment from '../components/Comment'
import Blurb from '../components/Blurb'
import config from '../utils/config'
import { slugify } from '../utils/helpers'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  EmailShareButton,
  TumblrShareButton,
  RedditShareButton,
  WhatsappShareButton,
   FacebookIcon,
    TwitterIcon,
    RedditIcon,
    LinkedinIcon,
    TumblrIcon,
    EmailIcon,
    WhatsappIcon,
    TelegramIcon,  
} from "react-share";

export default function PostTemplate({ data, pageContext }) {
  const post = data.markdownRemark
  const { previous, next } = pageContext
  const { tags, thumbnail, title, description, date } = post.frontmatter
  const commentBox = React.createRef()
  const baseUrl = 'https://shivas.gtsb.io/'
  const shareIconSize = 32;

  useEffect(() => {
    const commentScript = document.createElement('script')
    const theme =
      typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark'
        ? 'github-dark'
        : 'github-light'
    commentScript.async = true
    commentScript.src = 'https://utteranc.es/client.js'
    commentScript.setAttribute('repo', 'shivashishy/comments') // CHANGE THIS if you're just going to clone this repo and use the code. Do not test your code using my repo.
    commentScript.setAttribute('issue-term', 'pathname')
    commentScript.setAttribute('id', 'utterances')
    commentScript.setAttribute('theme', theme)
    commentScript.setAttribute('crossorigin', 'anonymous')
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript)
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`)
    }
  }, []) // eslint-disable-line

  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`} />
      <SEO postPath={post.fields.slug} postNode={post} postSEO />
      <div className="container">
        <article>
        <Link className="back" to={`/blog/`}>
            <IoMdArrowBack size={30} /> Go to all Blogs
          </Link>
          <header className="article-header">
            <div className="container">
              <div className="thumb">
                <div>
                  <h1>{title}</h1>
                  <div className="post-meta">
                    <div>
                      By <Link to="/me">Shivashish Yadav</Link> on{' '}
                      <time>{date}</time>
                      <span>&nbsp; - &nbsp;</span>
                <span>{post.fields.readingTime.text}</span>
                    </div>
                    {tags && (
                      <div className="tags">
                        {tags.map((tag) => (
                          <Link
                            key={tag}
                            to={`/tags/${slugify(tag)}`}
                            className={`tag-${tag}`}
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {thumbnail && (
                  <Img
                    fixed={thumbnail.childImageSharp.fixed}
                    className="post-thumbnail"
                  />
                )}
              </div>
            </div>
            {description && <p className="description">{description}</p>}
          </header>
          <div
            className="article-post"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </div>
      <Blurb title="About the author">
        <p>
          Hey, I'm <Link to="/me">Shivashish</Link>, a software engineer, writer, and
          open source lover.
        </p>
        <p>
          <a
            className="button"
            href="https://shivashishyadav.substack.com/"
            target="_blank"
            rel="noreferrer"
          >
            Get the newsletter
          </a>
          <a
            className="button"
            href="https://ko-fi.com/shivashish"
            target="_blank"
            rel="noreferrer"
          >
            Buy me a coffee
          </a>
        </p>
      </Blurb>
      <div className="container">
        <div id="comments">
          <h2>Comments</h2>
          <Comment commentBox={commentBox} />
        </div>

        <Suggested previous={previous} next={next} />
      </div>
      <div className="sharer-buttons-toolbar clearfix floating">
      <FacebookShareButton url={baseUrl + pageContext.slug} title={title}
                            additionalProps={{"aria-label": "Twitter share button"}}
                        >
                            <FacebookIcon round size={shareIconSize} />
                        </FacebookShareButton>


                    <TwitterShareButton
                            url={baseUrl + pageContext.slug} title={title}
                            additionalProps={{"aria-label": "Twitter share button"}}
                        >
                            <TwitterIcon round size={shareIconSize}/>
                        </TwitterShareButton>
                        <LinkedinShareButton
                            url={baseUrl + pageContext.slug} title={title}
                            additionalProps={{"aria-label": "LinkedIn share button"}}
                        >
                            <LinkedinIcon round size={shareIconSize}/>
                        </LinkedinShareButton>
                        <RedditShareButton
                            url={baseUrl + pageContext.slug} title={title}
                            additionalProps={{"aria-label": "Reddit share button"}}
                        >
                            <RedditIcon round size={shareIconSize}/>
                        </RedditShareButton>
                        <TumblrShareButton
                            url={baseUrl + pageContext.slug} title={title}
                            additionalProps={{"aria-label": "Tumblr share button"}}
                        >
                            <TumblrIcon round size={shareIconSize}/>
                        </TumblrShareButton>

                        <EmailShareButton
                           url={baseUrl + pageContext.slug} title={title}
                            additionalProps={{"aria-label": "Share by email button"}}
                        >
                            <EmailIcon round size={shareIconSize}/>
                        </EmailShareButton>

                        <WhatsappShareButton
                            url={baseUrl + pageContext.slug} title={title}
                            additionalProps={{"aria-label": "Share by whatsapp button"}}
                        >
                            <WhatsappIcon round size={shareIconSize}/>
                        </WhatsappShareButton>

                        <TelegramShareButton
                            url={baseUrl + pageContext.slug} title={title}
                            additionalProps={{"aria-label": "Share by whatsapp button"}}
                        >
                            <TelegramIcon round size={shareIconSize}/>
                        </TelegramShareButton>
                      

    </div>
      <ScrollToTop showUnder={160}>
                            <span class="largefont">Top</span>
                      </ScrollToTop>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
        readingTime {
          text
        }
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        description
        thumbnail {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

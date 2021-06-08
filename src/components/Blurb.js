import React from 'react'

import shiva from '../../content/images/shiva2.jpg'

export default function Blurb({ title, children }) {
  return (
    <section className="blurb">
      <div className="container">
        <div>
          <h1>{title}</h1>
          {children}
        </div>
        <div>
          <img src={shiva} alt="shiva" className="avatar" />
        </div>
      </div>
    </section>
  )
}

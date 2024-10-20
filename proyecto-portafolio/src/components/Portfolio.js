import React from 'react'
import { works } from '../data/works'
import { Link } from 'react-router-dom'

export const Portfolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>
      <section className='works'>
      {
        works.map((work) => (
          <article key={work.id} className='work-item'>
            <div className='mask'>
              <img src={"/images/" + work.id + ".png"}/>
            </div>
            <span>{work.categories}</span>
            <h2><Link to={"/project/" + work.id}>{work.name}</Link></h2>
            <h3>{work.technologies}</h3>
          </article>
        ))
      }
      </section>
    </div>
  )
}

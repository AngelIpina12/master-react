import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { works } from '../data/works'

export const Project = () => {
    const [project, setProject] = useState({})
    const {id} = useParams()
    useEffect(() => {
        const project = works.find(work => work.id === id)
        setProject(project)
    }, [])

  return (
    <div className='page page-work'>
        <div className='mask'>
            <img src={"/images/" + project.id + ".png"}/>
        </div>
        <h1 className='heading'>{project.name}</h1>
        <h2>{project.categories}</h2>
        <h3>{project.technologies}</h3>
        <p>{project.description}</p>
        <a href={project.url} target='_blank'>Ver proyecto</a>
    </div>
  )
}

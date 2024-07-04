import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { works } from '../data/works';

export const Project = () => {
    const [project, setProject] = useState({});
    const params = useParams();
    useEffect(() => {
        let project = works.filter(work => work.id === params.id)
        setProject(project[0]);
    }, [])
  return (
    <div className='page page-work'>
        <div className='mask'>
            <img src={"/images/" + project.id + ".png"} alt='imagen del proyecto'/>
        </div>
        <h1 className='heading'>{project.name}</h1>
        <p>{project.technologies}</p>
        <p>{project.description}</p>
        <a href={project.url} target='_blank'>Ir al proyecto</a>
    </div>
  )
}

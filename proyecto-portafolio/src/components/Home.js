import React from 'react'
import { Link } from 'react-router-dom'
import { Worklist } from './Worklist'

export const Home = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy <strong>José Ángel Ipiña</strong>, desarrollador web en Nuevo León. 
        Soy Ing. en Tecnologías Computacionales actualmente con puesto de 
        <strong>Desarrollador JR</strong> en la empresa <strong>XCF S.A. de C.V</strong>.  
      </h1>
      <h2 className='title'>
        Ofrezco mis servicios para crear un sitio o aplicacion web, tener más 
        visibilidad y relevancia en internet. Ponte en <Link to="/contact">contacto conmigo</Link> si te interesa.
      </h2>
      <section className='latest-works'>
        <h2 className='heading'>Proyectos</h2>
        <p>Estos son algunos de mis proyectos como Desarrollador Web</p>
        <Worklist limit="2"/>
      </section>
    </div>
  )
}

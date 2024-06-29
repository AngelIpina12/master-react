import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <h1>
        Hola, soy José Ángel Ipiña, soy Desarrollador Web en Nuevo León. 
        Soy Ing. en Tecnologías Computacionales actualmente con puesto de 
        Desarrollador JR en la empresa XCF S.A. de C.V.  
      </h1>
      <h2>
        Ofrezco mis servicios para crear un sitio o aplicacion web, tener más 
        visibilidad y relevancia en internet. Ponte en <Link to="/contacto">contacto conmigo</Link> si te interesa.
      </h2>
      <section className='latest-works'>
          <h2>Proyectos</h2>
          <p>Estos son algunos de mis proyectos como Desarrollador Web</p>
          <div className='works'>

          </div>
      </section>
    </div>
  )
}

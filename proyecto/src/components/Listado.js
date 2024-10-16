import React, { useEffect } from 'react'

export const Listado = ({list, setList}) => {
    useEffect(() => {
        console.log("Componentes del listado de películas carganado");
        getMovies()
    })

    const getMovies = () => {
        let movies = JSON.parse(localStorage.getItem("pelis"));
        setList(movies);
    }

  return (
    <>
      {list != null ? 
        list.map(peli => {
            return(
                <article key={peli.id} className="peli-item">
                    <h3 className="title">{peli.title}</h3>
                    <p className="description">{peli.description}</p>
                    <button className="edit">Editar</button>
                    <button className="delete">Borrar</button>
                </article>
            )
        }) : <h2>No hay películas para mostrar</h2> }
    </>
  )
}

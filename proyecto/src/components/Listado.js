import React, { useEffect, useState } from 'react'
import { Edit } from './Edit';

export const Listado = ({list, setList}) => {
    const [edit, setEdit] = useState(0);

    useEffect(() => {
        console.log("Componentes del listado de películas carganado");
        getMovies()
    }, [])

    const getMovies = () => {
        let movies = JSON.parse(localStorage.getItem("pelis"));
        setList(movies);
        return movies
    }

    const deleteMovie = (id) => {
        let movieStoraged = getMovies();
        let newArrayMovies = movieStoraged.filter(movie => movie.id !== parseInt(id))
        setList(newArrayMovies);
        localStorage.setItem("pelis", JSON.stringify(newArrayMovies));
    }

  return (
    <>
      {list != null ? 
        list.map(movie => {
            return(
                <article key={movie.id} className="peli-item">
                    <h3 className="title">{movie.title}</h3>
                    <p className="description">{movie.description}</p>
                    <button className="edit" onClick={() => setEdit(movie.id)}>Editar</button>
                    <button className="delete" onClick={() => deleteMovie(movie.id)}>Borrar</button>
                    {edit === movie.id && (<Edit movie={movie} getMovies={getMovies} setEdit={setEdit} setList={setList}/>)}
                </article>
            )
        }) : <h2>No hay películas para mostrar</h2> }
    </>
  )
}

import React from 'react'


export const Edit = ({movie, getMovies, setEdit, setList}) => {
    const titleComponent = "Editar película";

    const saveEdition = (e, id) => {
      e.preventDefault();
      let target = e.target;
      const storagedMovies = getMovies();
      const index = storagedMovies.findIndex(movie => movie.id === id);
      let movie = {
        id,
        title: target.title.value,
        description: target.description.value
      }
      storagedMovies[index] = movie;
      localStorage.setItem("pelis", JSON.stringify(storagedMovies));
      setList(storagedMovies);
      setEdit(0);
    }

  return (
    <div className='edit_form'>
        <h3 className='title'>{titleComponent}</h3>
        <form onSubmit={e => saveEdition(e, movie.id)}>
            <input type='text' name='title' className='titleEdited' defaultValue={movie.title}/>
            <textarea name='description' className='descriptionEdited' defaultValue={movie.description}/>
            <input type='submit' className='editar' value="Actualizar"/>
        </form>
    </div>
  )
}

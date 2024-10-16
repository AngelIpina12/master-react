import React from 'react'

export const Edit = ({movie}) => {
    const titleComponent = "Editar película";

  return (
    <div className='edit_form'>
        <h3 className='title'>{titleComponent}</h3>
        <form>
            <input type='text' name='title' className='titleEdited' defaultValue={movie.title}/>
            <textarea name='description' className='descriptionEdited' defaultValue={movie.description}/>
            <input type='submit' className='editar' value="Actualizar"/>
        </form>
    </div>
  )
}

import React from 'react'

export const Create = () => {
  return (
    <div className='jumbo'>
      <h3>Crear Artículo</h3>
      <p>Formulario para crear un artículo</p>
      <form className='form'>
        <div className='form-group'>
          <label htmlFor='title'>Título</label>
          <input type='text' name='title' id='title' />
        </div>
        <div className='form-group'>
          <label htmlFor='content'>Contenido</label>
          <textarea name='content' id='content'></textarea>
        </div>
        <div className='form-group'>
          <label htmlFor='file0'>Imagen</label>
          <input type='file' name='file0' id='file0' />
        </div>
        <input type='submit' value='Guardar' className='btn btn-success' />
      </form>
    </div>
  )
}

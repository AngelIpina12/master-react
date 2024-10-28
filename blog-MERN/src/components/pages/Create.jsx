import React from 'react'
import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { ResponseAjax } from '../../helpers/ResponseAjax'
import { Global } from '../../helpers/Global'


export const Create = () => {
  const {form, sendData, changeData} = useForm({});
  const [status, setStatus] = useState("no_saved");
  const saveArticle = async (e) => {
    e.preventDefault();
    const {data, loading} = await ResponseAjax(Global.url + 'create', 'POST', form);
    if(data.status === 'success'){
      setStatus("saved");
    }else{
      setStatus("error");
    }
  }
  return (
    <div className='jumbo'>
      <h1>Crear Artículo</h1>
      <p>Formulario para crear un artículo</p>
      {status === "saved" && <strong>Artículo guardado correctamente</strong>}
      {status === "error" && <strong>Error al guardar el artículo</strong>}
      <form className='form' onSubmit={saveArticle}>
        <div className='form-group'>
          <label htmlFor='title'>Título</label>
          <input type='text' name='title' id='title' onChange={changeData} value={form.title} />
        </div>
        <div className='form-group'>
          <label htmlFor='content'>Contenido</label>
          <textarea name='content' id='content' onChange={changeData} value={form.content}></textarea>
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

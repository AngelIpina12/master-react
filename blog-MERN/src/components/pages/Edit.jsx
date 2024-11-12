import React, { useEffect } from 'react'
import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { ResponseAjax } from '../../helpers/ResponseAjax'
import { Global } from '../../helpers/Global'
import { useParams } from 'react-router-dom'


export const Edit = () => {
  const {form, sendData, changeData} = useForm({});
  const [status, setStatus] = useState("no_saved");
  const [article, setArticle] = useState({})
  const params = useParams()

  useEffect(() => {
    getArticle()
  }, [])

  const getArticle = async () => {
    const url = Global.url + 'article/' + params.id
    const {data} = await ResponseAjax(url, 'GET')
    if(data.status === 'success'){
      setArticle(data.article)
    }
  }

  const editArticle = async (e) => {
    e.preventDefault();
    
    let newArticle = form

    try {
      const {data} = await ResponseAjax(Global.url + 'article/' + params.id, 'PUT', newArticle);
      
      if(data.status === 'success'){
        const fileInput = document.getElementById('file0');
        
        if(fileInput.files[0]){
          const formData = new FormData();
          formData.append('file0', fileInput.files[0]);
          
          const uploadResponse = await ResponseAjax(
            Global.url + 'upload-image/' + data.article._id, 
            'POST', 
            formData, 
            true
          );

          if(uploadResponse.data.status === 'success'){
            setStatus("saved");
          } else {
            setStatus("saved_error");
          }
        } else {
          setStatus("saved");
        }
      } else {
        setStatus("error");
      }
    } catch(error) {
      setStatus("error");
    }
  }
  return (
    <div className='jumbo'>
      <h1>Editar Artículo</h1>
      <p>Formulario para editar: {article.title}</p>
      {status === "saved" && <strong>Artículo guardado correctamente</strong>}
      {status === "error" && <strong>Error al guardar el artículo</strong>}
      {status === "saved_error" && <strong>Error al guardar la imagen</strong>}
      <form className='form' onSubmit={editArticle}>
        <div className='form-group'>
          <label htmlFor='title'>Título</label>
          <input type='text' name='title' id='title' onChange={changeData} defaultValue={article.title} />
        </div>
        <div className='form-group'>
          <label htmlFor='content'>Contenido</label>
          <textarea name='content' id='content' onChange={changeData} defaultValue={article.content}></textarea>
        </div>
        <div className='form-group'>
          <label htmlFor='file0'>Imagen</label>
          <div className='mask'>
              {article.image != "default.png" ? <img src={`${Global.url}image/${article.image}`} alt={article.title} /> : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript" />}
          </div>
          <input type='file' name='file0' id='file0' />
        </div>
        <input type='submit' value='Guardar' className='btn btn-success' />
      </form>
    </div>
  )
}

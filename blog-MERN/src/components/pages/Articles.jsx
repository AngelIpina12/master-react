import {React, useState, useEffect} from 'react'
import { Global } from '../../helpers/Global'
import { ResponseAjax } from '../../helpers/ResponseAjax'

export const Articles = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getArticles()
  }, [])

  const getArticles = async () => {
    const url = Global.url + 'articles'
    const {data, loading} = await ResponseAjax(url, 'GET')
    if(data.status === 'success'){
      setArticles(data.articles)
    }
  }

  return (
    <>
      {
        articles.length > 0 ?
        articles.map((article) => (
          <article key={article._id} className="article-item">
            <div className='mask'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript" />
          </div>
          <div className='data'>
            <h3 className="title">{article.title}</h3>
            <p className="description">{article.content}</p>
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
          </div>
          </article>
        )) :
        <h2>No hay artículos</h2>
      }
    </>
  )
}

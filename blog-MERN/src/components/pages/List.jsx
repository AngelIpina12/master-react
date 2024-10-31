import React from 'react'
import { Global } from '../../helpers/Global'

export const List = ({articles, setArticles}) => {
  return (
    articles.map((article) => (
        <article key={article._id} className="article-item">
          <div className='mask'>
          {article.image != "default.png" ? <img src={`${Global.url}image/${article.image}`} alt={article.title} /> : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript" />}
        </div>
        <div className='data'>
          <h3 className="title">{article.title}</h3>
          <p className="description">{article.content}</p>
          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </div>
        </article>
      ))
  )
}

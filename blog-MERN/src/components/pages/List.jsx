import React from 'react'
import { Global } from '../../helpers/Global'
import { ResponseAjax } from '../../helpers/ResponseAjax'

export const List = ({articles, setArticles}) => {
  const deleteArticle = async (articleId) => {
    let {data} = await ResponseAjax(Global.url + 'article/' + articleId, 'DELETE');
    if(data.status === 'success'){
      setArticles(articles.filter(article => article._id !== articleId));
    }
  }
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
          <button className="delete" onClick={() => deleteArticle(article._id)}>Borrar</button>
        </div>
        </article>
      ))
  )
}

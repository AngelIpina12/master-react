import React from 'react'
import { Global } from '../../helpers/Global'
import { ResponseAjax } from '../../helpers/ResponseAjax'
import { Link } from 'react-router-dom'

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
          <h3 className="title"><Link to={"/article/" + article._id}>{article.title}</Link></h3>
          <p className="description">{article.content}</p>
          <Link to={"/edit/" + article._id} className="edit">Editar</Link>
          <button className="delete" onClick={() => deleteArticle(article._id)}>Borrar</button>
        </div>
        </article>
      ))
  )
}

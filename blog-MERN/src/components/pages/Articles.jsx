import {React, useState, useEffect} from 'react'

export const Articles = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    let data = [
      {
        _id: 1,
        title: 'Desarrollo web',
        content: 'content'
      }
    ]
    setArticles(data)
  }, [])

  return (
    <>
      {articles.map((article) => (
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
      ))}
    </>
  )
}

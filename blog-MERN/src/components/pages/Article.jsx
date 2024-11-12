import {React, useState, useEffect} from 'react'
import { Global } from '../../helpers/Global'
import { ResponseAjax } from '../../helpers/ResponseAjax'
import { useParams } from 'react-router-dom'

export const Article = () => {
  const [article, setArticle] = useState({})
  const [loading, setLoading] = useState(true)
  const params = useParams();

  useEffect(() => {
    getArticle()
  }, [])

  const getArticle = async () => {
    const url = Global.url + 'article/' + params.id
    const {data, loading} = await ResponseAjax(url, 'GET')
    if(data.status === 'success'){
      setArticle(data.article)
      setLoading(false)
    }
  }

  return (
    <div className='jumbo'>
      {loading ? 
      <h2>Cargando...</h2> : 
        (
          <>
            <div className='mask'>
              {article.image != "default.png" ? <img src={`${Global.url}image/${article.image}`} alt={article.title} /> : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript" />}
            </div>
            <h1>{article.title}</h1>
            <span>{article.date}</span>
            <p>{article.content}</p>
          </>
        ) 
      }
    </div>
  )
}

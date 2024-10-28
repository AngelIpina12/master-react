import {React, useState, useEffect} from 'react'
import { Global } from '../../helpers/Global'
import { ResponseAjax } from '../../helpers/ResponseAjax'
import { List } from './lIST.JSX'

export const Articles = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getArticles()
  }, [])

  const getArticles = async () => {
    const url = Global.url + 'articles'
    const {data, loading} = await ResponseAjax(url, 'GET')
    if(data.status === 'success'){
      setArticles(data.articles)
      setLoading(false)
    }
  }

  return (
    <>
      {loading ? 
      <h2>Cargando...</h2> : 
        articles.length > 0 ? 
        <List articles={articles} setArticles={setArticles} /> : 
        <h2>No hay artículos</h2>}
    </>
  )
}

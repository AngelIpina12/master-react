import React from 'react'

export const Articles = () => {
  return (
    <>
      <article className="article-item">
          <div className='mask'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript" />
          </div>
          <div className='data'>
            <h3 className="title">Desarrollo web</h3>
            <p className="description">victorroblesweb.es</p>
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
          </div>
      </article>
    </>
  )
}

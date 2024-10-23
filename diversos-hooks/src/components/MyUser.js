import React, { useState } from 'react'
import { useAjax } from '../hooks/useAjax';

export const MyUser = () => {
    const [url, setUrl] = useState(`https://reqres.in/api/users?page=1`);
    const {data, loading} = useAjax(url);

    const getId = (e) => {
        let id = parseInt(e.target.value);
        setUrl(`https://reqres.in/api/users?page=${id}`);
    }

  return (
    <div>
        <h1>Mi usuario: </h1>
        <p>Datos del usuario: </p>
        {loading ? <p>Cargando...</p> : <p></p>}
        {data?.data && data.data.length > 0 ? (
            <p>{data.data[0].first_name} {data.data[0].last_name}</p>
        ) : (
            <p>No hay datos disponibles</p>
        )}
        <input type='number' name='id' onChange={getId}/>
    </div>
  )
}

import React, { useEffect, useReducer } from 'react'
import { GameReducer } from '../reducers/GameReducer';

const init = () => {
    return JSON.parse(localStorage.getItem("games")) || [];
}

export const MyGames = () => {
    const [games, dispatch] = useReducer(GameReducer, [], init);
    useEffect(() => {localStorage.setItem("games", JSON.stringify(games))}, [games]);
    const getDataForm = (e) => {
        e.preventDefault();
        let game = {
            id: new Date().toISOString(),
            title: e.target.title.value,
            description: e.target.description.value
        }
        const action = {
            type: "ADD_GAME",
            payload: game
        }
        dispatch(action);
    }
    const deleteGame = (id) => {
        const action = {
            type: "DELETE_GAME",
            payload: id
        }
        dispatch(action);
    }
    const updateGame = (id, title) => {
        const action = {
            type: "UPDATE_GAME",
            payload: {id, title}
        }
        dispatch(action);
    }

  return (
    <div>
        <h1>Estos son mis videojuegos</h1>
        <p>Numero de videojuegos: {games.length}</p>
        <ul>
            {games.map((game) => (
                <li key={game.id}>{game.title}&nbsp;
                    <button onClick={() => deleteGame(game.id)}>Borrar</button>
                    <input type="text" onBlur={(e) => updateGame(game.id, e.target.value)} name="title" placeholder="Nombre" />
                </li>
            ))}
        </ul>
        <h3>Agregar videojuego</h3>
        <form onSubmit={getDataForm}>
            <input type="text" name="title" placeholder="Nombre" />
            <textarea name="description" placeholder="Descripción"></textarea>
            <button type="submit">Agregar</button>
        </form>
    </div>
  )
}

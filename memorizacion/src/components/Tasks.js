import React, { useMemo, useState } from 'react'

export const Tasks = () => {
    const [tasks, setTasks] = useState([])
    const [counter, setCounter] = useState(1200)
    const saveTasks = (e) => {
        e.preventDefault()
        let taskUpdated = [...tasks, e.target.description.value]
        setTasks(taskUpdated)
    }
    const deleteTask = (index) => {
        let taskUpdated = tasks.filter((task, i) => i !== index)
        setTasks(taskUpdated)
    }
    const addToCounter = () => {
        setCounter(counter + 1)
    }
    const pastCounter = (accumulator) => {
        for (let i = 0; i <= accumulator; i++) {
            console.log("Ejecutando el bucle")
        }
        return `Contador manual de tareas: ${accumulator}`;
    }
    const memoCounter = useMemo(() => pastCounter(counter), [counter])

  return (
    <div className='tasks-container'>
        <h1>Tasks</h1>
        <form onSubmit={saveTasks}>
            <input type="text" name='description' placeholder='Describe la tarea' />
            <input type="submit" value="Guardar" />
        </form>
        <h3>{memoCounter}</h3>
        <button onClick={addToCounter}>Sumar</button>
        <h3>Tareas pendientes</h3>
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task} &nbsp; <button onClick={() => deleteTask(index)}>Eliminar</button></li>
            ))}
        </ul>
    </div>
  )
}

import React, { useState } from 'react'

export const MyForm = () => {
    const [form, setForm] = useState({});
    const serializedForm = (form) => {
        const formData = new FormData(form);
        const formDataObj = {};
        formData.forEach((name ,value) => {
            formDataObj[name] = value;
        });
        return formDataObj;
    }

    const sendData = (e) => {
        e.preventDefault();
        setForm(serializedForm(e.target));
    }

    const changeData = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

  return (
    <div>
        <h1>Formulario</h1>
        <p>Formulario para guardar un curso</p>
        <p>Curso guardado: {form.title}</p>
        <pre className='code'>{JSON.stringify(form)}</pre>
        <form className='form' onSubmit={sendData}>
            <input type="text" name="title" onChange={changeData} placeholder="Titulo del curso" />
            <input type="number" name="year" onChange={changeData} placeholder="Año de publicación" />
            <textarea name="description" onChange={changeData} placeholder="Descripción del curso"></textarea>
            <input type="text" name="author" onChange={changeData} placeholder="Autor del curso" />
            <input type="email" name="email" onChange={changeData} placeholder="Correo de contacto" />
            <input type="submit" value="Guardar" />
        </form>
    </div>
  )
}

import React, { useEffect, useState } from 'react'

export const Employees = React.memo(({page = 1}) => {
    const [employees, setEmployees] = useState([])
    useEffect(() => {getEmployees(page)}, [page])
    const getEmployees = async (page) => {
        const response = await fetch("https://reqres.in/api/users?page=" + page)
        const {data: employees} = await response.json();
        setEmployees(employees)
        console.log("Se han cargado los empleados");
    }
    console.log("Se ha vuelto a renderizar Employees")
  return (
    <div>
        <h2>Empleados de la página {page}</h2>
        <ul className='employees'>
            {employees.length >= 1 && employees.map((employee) => (
                <li key={employee.id}>{employee.first_name} {employee.last_name}</li>
            ))}
        </ul>
    </div>
  )
})

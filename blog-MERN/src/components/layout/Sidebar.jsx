import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Sidedbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const doSearch = (e) => {
    e.preventDefault()
    let mySearch = e.target.searchField.value;
    navigate("/search/" + mySearch)
  }
  return (
    <aside className="lateral">
      <div className="search">
        <h3 className="title">Buscador</h3>
        <form onSubmit={doSearch}>
          <input type="text" name='searchField' placeholder="Buscar..." />
          <input type='submit' id='search' value="Buscar"/>
        </form>
      </div>
    </aside>
  )
}

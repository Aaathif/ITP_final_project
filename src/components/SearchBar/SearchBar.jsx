import React, { useContext, useState } from 'react'
import css from './SearchBar.module.css'
import { SearchContext } from '../../context/SearchContext';
import { useNavigate } from 'react-router-dom';

function SearchBar() {

  const [type, setType] = useState("")

  const { dispatch } = useContext(SearchContext);

  const navigate = useNavigate();

  const handleSearch = () => {
    // dispatch({ type: "NEW_SEARCH", payload: { type } });
    navigate("/product", { state: { type } });
  }

  return (
    <div className={css.container}>
      <div className={css.search}>
        <input className={css.inputSearch} type="text" placeholder='Enter product name' onChange={(e) => setType(e.target.value)}/>
        <button className={css.btnSearch} onClick={handleSearch}>Search</button>
      </div>
    </div>
  )
}

export default SearchBar

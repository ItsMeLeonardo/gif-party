import { useState } from 'react';
import { useLocation } from 'wouter';
import './style.css'

export default function SearchInput() {

  const [keyboard, setKeyboard] = useState('')
  const [location, setLocation] = useLocation()

  const handleSearchChange = event => {
    setKeyboard(event.target.value)
  }

  const handleSearchGif = event => {
    event.preventDefault()
    console.log(location);
    setLocation(`/search/${keyboard}`)
  }

  return (
    <form htmlFor="search" className="Search" onSubmit={handleSearchGif}>
      <input
        type="search"
        name="search-gif"
        placeholder=" "
        id="search"
        className="SearchInput"
        value={keyboard}
        onChange={handleSearchChange}
      />
      <span className="Search-border"></span>
      <span className="SearchLabel">search a gif</span>
      <object
        className="SearchIcon"
        type="image/svg+xml"
        data={`src/static/icons/search-desktop.svg`}
      ></object>

    </form>
  );
}

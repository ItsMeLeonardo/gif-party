import { useState } from 'react'
import { useLocation } from 'wouter'
import './style.css'

export default function SearchInput() {
  const [keyboard, setKeyboard] = useState('')
  const [, setLocation] = useLocation()

  const handleSearchChange = (event) => setKeyboard(event.target.value)
  const handleSubmitSearchGif = (event) => {
    event.preventDefault()
    setLocation(`/search/${keyboard}`)
    setKeyboard('')
  }

  return (
    <form className='Search' onSubmit={handleSubmitSearchGif}>
      <input
        type='search'
        name='search-gif'
        placeholder=' '
        id='search-gif'
        className='SearchInput'
        value={keyboard}
        onChange={handleSearchChange}
      />
      <span className='Search-border' />
      <label htmlFor='search-gif' className='SearchLabel'>
        search a gif
      </label>
      <picture className='SearchIcon'>
        <source type='image/png' srcSet='src/static/images/search.png' />
        <source type='image/webp' srcSet='src/static/images/search.webp' />
        <img src='src/static/icons/search.svg' alt='search-icon' />
      </picture>
    </form>
  )
}

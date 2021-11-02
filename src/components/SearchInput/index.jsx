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
  }

  return (
    <form className='Search' onSubmit={handleSubmitSearchGif}>
      <input
        type='search'
        name='search-gif'
        placeholder=' '
        id='search'
        className='SearchInput'
        value={keyboard}
        onChange={handleSearchChange}
      />
      <span className='Search-border' />
      <label htmlFor='search' className='SearchLabel'>
        search a gif
      </label>
      <object
        className='SearchIcon'
        type='image/svg+xml'
        data={`src/static/icons/search-desktop.svg`}
      ></object>
    </form>
  )
}

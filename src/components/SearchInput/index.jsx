import { useReducer, useState } from 'react'
import { useLocation } from 'wouter'
import './style.css'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

const ACTIONS = {
  UPDATE_KEYWORD: '',
  UPDATE_RATING: '',
}

const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: payload,
      }

    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: payload,
      }

    default:
      throw new Error(`Unhandled action type: ${type}`)
  }
}

export default function SearchInput() {
  const [, setLocation] = useLocation()

  const [state, dispatch] = useReducer(reducer, {
    keyword: '',
    rating: RATINGS[0],
  })

  const { keyword, rating } = state

  const handleSearchChange = (event) => {
    const newKeyword = event.target.value
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: newKeyword })
  }
  const handleSubmitSearchGif = (event) => {
    event.preventDefault()
    setLocation(`/search/${keyword}/${rating}`)
  }

  const handleChangeRating = (event) => {
    const newRating = event.target.value
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: newRating })
  }

  return (
    <form className='Search' onSubmit={handleSubmitSearchGif}>
      <input
        type='search'
        name='search-gif'
        placeholder=' '
        id='search-gif'
        className='SearchInput'
        value={keyword}
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

      <label htmlFor='rating' className='SearchRating-label'>
        <select
          name='rating'
          id='rating'
          className='SearchRating text-gradient'
          value={rating}
          onChange={handleChangeRating}
        >
          <option value='rating-type' disabled>
            Rating type
          </option>
          {RATINGS.map((ratingOpt) => (
            <option
              key={ratingOpt}
              value={ratingOpt}
              className='SearchRating-option'
            >
              {ratingOpt}
            </option>
          ))}
        </select>
      </label>
    </form>
  )
}

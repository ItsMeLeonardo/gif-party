import { useLocation } from 'wouter'
import useForm from './hooks'
import './style.css'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

export default function SearchInput() {
  const { keyword, rating, changeKeyword, changeRating } = useForm(
    '',
    RATINGS[0]
  )

  const handleChangeKeyword = (event) => {
    changeKeyword(event.target.value)
  }

  const handleChangeRating = (event) => {
    changeRating(event.target.value)
  }

  const [, setLocation] = useLocation()
  const handleSubmitSearchGif = (event) => {
    event.preventDefault()
    setLocation(`/search/${keyword}/${rating}`)
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
        onChange={handleChangeKeyword}
      />
      <span className='Search-border' />
      <label htmlFor='search-gif' className='SearchLabel'>
        search a gif
      </label>
      <picture className='SearchIcon'>
        <source type='image/png' srcSet='/images/search.png' />
        <source type='image/webp' srcSet='/images/search.webp' />
        <img src='/icons/search.svg' alt='search-icon' />
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

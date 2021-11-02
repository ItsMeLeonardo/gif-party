import './style.css'

export default function Button({ srcOfIcon }) {
  const searchIcon = 'search-mobile.svg'

  // TODO: add type of button, => type =[white, black, icon, ...]

  return (
    <button type='button' className='btn icon'>
      <object
        className='ButtonIcon'
        type='image/svg+xml'
        data={`src/static/icons/${srcOfIcon || searchIcon}`}
      ></object>
    </button>
  )
}

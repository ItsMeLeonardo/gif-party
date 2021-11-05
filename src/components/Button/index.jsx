import './style.css'

export default function Button({ icon }) {
  const iconsName = {
    search: 'search',
    scroll: 'scroll',
    random: 'random-icon',
    arrowDown: 'arrow-down',
    dribbble: 'dribbble',
    linkedin: 'linkedin',
    github: 'github',
  }

  return (
    <button type='button' className='btn icon'>
      <picture className='ButtonIcon'>
        <source
          type='image/webp'
          srcSet={`src/static/images/${iconsName[icon]}.webp`}
        />
        <source
          type='image/png'
          srcSet={`src/static/images/${iconsName[icon]}.png`}
        />
        <img
          src={`src/static/icons/${iconsName[icon]}.svg`}
          alt={iconsName[icon]}
        />
      </picture>
    </button>
  )
}

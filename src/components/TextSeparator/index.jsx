import './style.css'

export function Subtitle({ children, id }) {
  return (
    <h2 className='subtitle' id={id || ''}>
      {children}
    </h2>
  )
}

export function TextDescription({ children, id }) {
  return (
    <p className='textDescription' id={id || ''}>
      {children}
    </p>
  )
}

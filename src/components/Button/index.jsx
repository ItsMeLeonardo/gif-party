import './style.css'

export default function Button({ type, src }) {

  const searchIcon = 'src/static/icons/search-mobile.svg'
  //TODO: and the white btn add if the src is not null
  return (
    <button className="btn icon">
      <img
        src={src || searchIcon}
        alt="random icon"
        className="ButtonIcon"
      />
    </button>
  );
}

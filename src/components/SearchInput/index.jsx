import './style.css'

export default function SearchInput() {
  return (
    <label htmlFor="search" className="Search">
      <input
        type="search"
        name="search-gif"
        placeholder=" "
        id="search"
        className="SearchInput"
      />
      <span className="Search-border"></span>
      <span className="SearchLabel">search a gif</span>
      <object
        className="SearchIcon"
        type="image/svg+xml"
        data={`src/static/icons/search-desktop.svg`}
      ></object>

    </label>
  );
}

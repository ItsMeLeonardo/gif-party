import "./style.css";

export default function Button({ type, src }) {
  const searchIcon = "search-mobile.svg";

  //TODO: and the white btn add if the src is not null
  return (
    <button className="btn icon">
      <object
        className="ButtonIcon"
        type="image/svg+xml"
        data={`src/static/icons/${src || searchIcon}`}
      ></object>
    </button>
  );
}

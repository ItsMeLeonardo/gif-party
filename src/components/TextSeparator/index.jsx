import "./style.css";

export function Subtitle({ content, id }) {
  return (
    <h3 className="subtitle" id={id || ""}>
      {content}
    </h3>
  );
}

export function TextDescription({ children, id }) {
  return (
    <p className="textDescription" id={id || ""}>
      {children}
    </p>
  );
}

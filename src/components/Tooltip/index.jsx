import { Link } from "wouter";

import './style.css';

export default function Tooltip(props) {
  const { content, className, children, position, to } = props;

  if (to.includes('https://')) {
    return (
      <a
        href={to}
        className={`TooltipContainer ${className}`}
        target="_blank"
      >
        {children}
        <span className={`Tooltip ${position}`}>{content}</span>
      </a>
    );
  }

  return (
    <Link href={to} className={`${className} TooltipContainer`}>
      {children}
      <span className={`Tooltip ${position}`}>{content}</span>
    </Link>
  );
}

import { Link } from "wouter";
import "./style.css";

export default function ResultItem({ id, children, className }) {
  return (
    <Link href={`/detail/${id}`}>
      <button type="button" className={className}>
        {children}
      </button>
    </Link>
  );
}

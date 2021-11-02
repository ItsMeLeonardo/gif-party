import { Link } from "wouter";

export default function CategoryItem({ name }) {
  return (
    <Link href={`/search/${name}`} className="btn white">
      <a className="btn white">
        <span className="text-gradient">{name}</span>
      </a>
    </Link>
  );
}

import { Link } from "wouter";
import "./style.css";

export default function ResultItem({ image, title, id }) {
  const gifName = title.trim().length === 0 ? "Anonymous Gif 😮" : title;

  // FIXME: change to component composition the <Link> more generic
  return (
    <Link href={`/detail/${id}`} className="Result overlayGradient">
      <img src={image} alt={`image of ${title}`} className="TrendingImg" />
      <h4 className="ResultName">{gifName}</h4>
    </Link>
  );
}

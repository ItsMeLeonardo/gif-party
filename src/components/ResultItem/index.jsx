/**
 * [T] - add structure jsx
 * [T] - add style 
 * [T] - Change <div> to link  
 */ 

import { Link } from 'wouter';
import './style.css'

export default function ResultItem(props) {
  const {image, title, id} = props;
  
  const gifName = (title.trim().length === 0) 
  ? 'Anonymous Gif 😮'
  :  title

  return (
    <Link href={`/detail/${id}`} className="Result overlayGradient">
      <img
        src={image}
        alt={`image of ${title}`}
        className="TrendingImg"
      />
      <h4 className="ResultName">{gifName}</h4>
    </Link>
  );
}

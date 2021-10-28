/**
 * [X]add body
 * [X]add styles
 * [X]create card component
 * [X]call the API
 *
 * [_]add function to view details
 * [_]infinite scroll
 */
import Navbar from "../../components/Navbar";
import { useLocation, useRoute } from "wouter";
import { Subtitle } from "../../components/TextSeparator";
import ResultItem from "../../components/ResultItem";
import { useGifs } from "../../hooks/useGifs";

import "./style.css";

export default function SearchResults(props) {
  const [match, params] = useRoute("/search/:name");

  if (!match) {
    useLocation("/");
    return null;
  }

  const { name: keyword } = params;

  const { gifs, loading } = useGifs({ keyword });

  console.log(gifs);

  return (
    <>
      <Navbar />
      <Subtitle content={`Result of ${keyword}`} />

      <div className="Results">
        {gifs.map((gif) => (
          <ResultItem key={gif.id} image={gif.image} title={gif.title} />
        ))}
      </div>
    </>
  );
}

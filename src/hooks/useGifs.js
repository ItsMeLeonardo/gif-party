import { useEffect, useState, useContext } from "react";
import CallApi from "../api";
import GifContext from "../context/GifContext";
import filterDataGif from "../utils/filterDataOfGif";

const SEARCH_URL =
  "https://api.giphy.com/v1/gifs/search?limit=25&offset=0&rating=g&lang=en";

export function useGifs({ keyword }) {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifContext);

  const url = `${SEARCH_URL}&q=${keyword}`;

  useEffect(() => {
    setLoading(true);
    CallApi({ url }).then((res) => {
      setGifs(res.map(filterDataGif));
      setLoading(false);
    });
  }, [keyword, setGifs]);

  return { loading, gifs };
}

import { useEffect, useState } from "react";
import CallApi from "../api";
import filterDataGif from "../utils/filterDataOfGif";


const SEARCH_URL = 'https://api.giphy.com/v1/gifs/search?limit=25&offset=0&rating=g&lang=en';

export default function useGifs({keyword}) {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  const url = `${SEARCH_URL}&q=${keyword}`

  useEffect(() => {
    setLoading(true);
    CallApi({url}).then(res => {
      setGifs(res.map(filterDataGif));
      setLoading(false);
    })
  }, [keyword]);

  return {loading, gifs};
}
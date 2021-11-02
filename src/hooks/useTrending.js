import { useState, useEffect } from "react";
import CallApi from "../api";
import filterDataGif from "../utils/filterDataOfGif";

const TRENDING_URL = "https://api.giphy.com/v1/gifs/trending?rating=g";

export default function useTrending({ limit = 1 }) {
  const [trends, setTrends] = useState([]);

  const url = `${TRENDING_URL}&limit=${limit}`;

  useEffect(() => {
    CallApi({ url }).then((data) => {
      setTrends(data.map(filterDataGif));
    });
  }, []);

  return { trends };
}

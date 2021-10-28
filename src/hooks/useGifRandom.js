import { useEffect } from "react";
import CallApi from "../api";
import filterDataGif from "../utils/filterDataOfGif";

const RANDOM_URL = "https://api.giphy.com/v1/gifs/random?rating=g";

export function useGifRandom() {
  const [gifRandom, setGifRandom] = useState();

  useEffect(() => {
    CallApi(RANDOM_URL).then((gif) => {
      setGifRandom(filterDataGif(gif));
    });
  }, []);

  return { gifRandom };
}

import { useContext, useState } from "react";
import { useRoute } from "wouter";
import GifContext from "../../context/GifContext";
import { useGifRandom } from "../../hooks/useGifRandom";

import "./style.css";

export default function Details() {
  const { gifs } = useContext(GifContext);

  const [match, { id }] = useRoute("/detail/:id");

  const [gif] = useState(gifs.find((gif) => gif.id === id));

  if (id === "random") {
    useGifRandom();
  }

  return (
    <div className="container">
      <h3 className="subtitle">{gif?.title}</h3>
      <div className="Detail">
        <div className="GifContent">
          <p className="textDescription">
            This gif was imported in {gif?.dateTime}
          </p>
          <img src={gif?.image} alt={gif?.title} className="mainGif" />
        </div>
        <div className="similarGif">
          <p className="textDescription">Similar gifs</p>
          <div className="Gifs">
            {gifs
              .filter((_, index) => index < 4)
              .map((similarGif) => (
                <div key={similarGif?.id} className="overlayGradient medium">
                  <img
                    src={similarGif?.image}
                    alt={similarGif?.title}
                    className="Gif"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

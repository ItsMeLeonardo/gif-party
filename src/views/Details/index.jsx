import { useContext, useState } from "react";
import { useRoute } from "wouter";
import { Subtitle, TextDescription } from "../../components/TextSeparator";
import GifContext from "../../context/GifContext";
import { useGifRandom } from "../../hooks/useGifRandom";

import "./style.css";

export default function Details() {
  const { gifs } = useContext(GifContext);
  const [, { id }] = useRoute("/detail/:id");

  const gif =
    id === "random" ? useGifRandom() : gifs.find((gif) => gif.id === id);

  return (
    <div className="container">
      <Subtitle content={gif?.title} />

      <div className="Detail">
        <div className="GifContent">
          <TextDescription>
            This gif was imported in {gif?.dateTime}
          </TextDescription>
          <img src={gif?.image} alt={gif?.title} className="mainGif" />
        </div>
        <div className="similarGif">
          <TextDescription>Other Gifs</TextDescription>
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

import { useContext, useState, useEffect } from 'react'
import GifContext from '../context/GifContext'
import { getGifById } from '../utils/getGifById'
import filterDataGif from '../utils/filterDataOfGif'
import CallApi from '../api'

export function useGifDetail(id) {
  const { gifs, setGifs } = useContext(GifContext)
  const [gifDetail, setDetailGif] = useState(null)

  useEffect(() => {
    if (!gifs?.length) {
      // in case the [gifs] are empty
      const url = 'https://api.giphy.com/v1/gifs/trending?rating=g&limit=4'
      CallApi({ url }).then((data) => {
        setGifs(data.map(filterDataGif))
      })
    }

    if (id === 'random') {
      const url = 'https://api.giphy.com/v1/gifs/random?rating=g'
      CallApi({ url }).then((gifRandom) => {
        setDetailGif(filterDataGif(gifRandom))
      })
    } else {
      const gif = gifs.find((gifContext) => gifContext.id === id)
      if (gif) {
        setDetailGif(gif)
      } else {
        getGifById(id).then(setDetailGif)
      }
    }
  }, [id])

  return [gifDetail, gifs]
}

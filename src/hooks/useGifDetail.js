import { useContext, useState, useEffect } from 'react'
import GifContext from '../context/GifContext'
import { getGifById } from '../utils/getGifById'
import filterDataGif from '../utils/filterDataOfGif'
import CallApi from '../api'

const RANDOM_URL = 'https://api.giphy.com/v1/gifs/random?rating=g'

export function useGifDetail(keyword) {
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

    if (keyword === 'random') {
      CallApi({ url: RANDOM_URL }).then((gifRandom) => {
        setDetailGif(filterDataGif(gifRandom))
      })
    } else {
      const gif = gifs.find(({ id }) => id === keyword)
      if (gif) {
        setDetailGif(gif)
      } else {
        getGifById(keyword).then(setDetailGif)
      }
    }
  }, [keyword])

  return [gifDetail, gifs]
}

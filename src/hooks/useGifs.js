import { useEffect, useState, useContext } from 'react'
import CallApi from '../api'
import GifContext from '../context/GifContext'
import filterDataGif from '../utils/filterDataOfGif'

const getUrl = ({ keyword = 'random', page = 0, limit = 10 } = {}) =>
  `https://api.giphy.com/v1/gifs/search?limit=${limit}&offset=${
    page * limit
  }&rating=g&lang=en&q=${keyword}`

export function useGifs({ keyword, limit }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const { gifs, setGifs } = useContext(GifContext)
  const [page, setPage] = useState(0)

  useEffect(() => {
    const url = getUrl({ keyword, limit })
    setLoading(true)
    CallApi({ url }).then((res) => {
      setGifs(res.map(filterDataGif))
      setLoading(false)
    })
  }, [keyword, setGifs])

  useEffect(() => {
    if (page !== 0) {
      const url = getUrl({ keyword, page, limit })
      setLoadingNextPage(true)
      CallApi({ url }).then((res) => {
        setGifs((prev) => prev.concat(res.map(filterDataGif)))
        setLoadingNextPage(false)
      })
    }
  }, [page, keyword])

  return { loading, gifs, setPage, loadingNextPage }
}

import { useEffect, useState, useContext } from 'react'
import CallApi from '../api'
import GifContext from '../context/GifContext'
import filterDataGif from '../utils/filterDataOfGif'

const getUrl = (urlParams) => {
  const { keyword = 'random', page = 0, limit = 10, rating = 'g' } = urlParams

  return `https://api.giphy.com/v1/gifs/search?limit=${limit}&offset=${
    page * limit
  }&rating=${rating}&lang=en&q=${keyword}`
}

export function useGifs({ keyword, limit, rating }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const { gifs, setGifs } = useContext(GifContext)
  const [page, setPage] = useState(0)

  useEffect(() => {
    const url = getUrl({ keyword, limit, rating })

    setLoading(true)
    CallApi({ url }).then((res) => {
      setGifs(res.map(filterDataGif))
      setLoading(false)
    })
  }, [keyword, setGifs, rating])

  useEffect(() => {
    if (page !== 0) {
      const url = getUrl({ keyword, page, limit })
      setLoadingNextPage(true)
      CallApi({ url }).then((res) => {
        setGifs((prev) => prev.concat(res.map(filterDataGif)))
        setLoadingNextPage(false)
      })
    }
  }, [page, keyword, rating])

  return { loading, gifs, setPage, loadingNextPage }
}

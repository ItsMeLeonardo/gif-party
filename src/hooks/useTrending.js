import { useState, useEffect } from "react"
import CallApi from "../api"

const TRENDING_URL = 'https://api.giphy.com/v1/gifs/trending?rating=g'

export default function useTrending({ limit = 1 }) {
  const [trends, setTrends] = useState([])
  
  const url = `${TRENDING_URL}&limit=${limit + 1}`

  useEffect(() => {
    CallApi({url}).then(data => {
      setTrends(data.map(filterDataGif))
    })
  }, [])
  return {trends}
}

const filterDataGif = (data) => {
  return {
    id: data.id,
    image: data.images.original.webp, 
    url: data.url,
    title: data.title,
    dateTime: data.import_datetime 
  }
}
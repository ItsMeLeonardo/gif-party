import CallApi from '../api'
import filterDataGif from './filterDataOfGif'

export const getGifById = async (id) => {
  const GIF_BY_ID = `https://api.giphy.com/v1/gifs/${id}`
  const gif = await CallApi({ url: GIF_BY_ID })
  return filterDataGif(gif)
}

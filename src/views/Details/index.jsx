import { useRoute } from 'wouter'
import ResultItem from '../../components/ResultItem'
import { Subtitle, TextDescription } from '../../components/TextSeparator'
import { useGifDetail } from '../../hooks/useGifDetail'

import './style.css'

export default function Details() {
  // FIXME: create a new hook, useDetail(id) if not found the id call the api or use the local storage or valid if the gif are random
  const [, { id }] = useRoute('/detail/:id')
  const [gif, gifs] = useGifDetail(id)

  return (
    <div className='container'>
      <Subtitle content={gif?.title} />

      <div className='Detail'>
        <div className='GifContent'>
          <TextDescription>
            This gif was imported in {gif?.dateTime}
          </TextDescription>
          <img src={gif?.image} alt={gif?.title} className='mainGif' />
        </div>
        <div className='similarGif'>
          <TextDescription>Other Gifs</TextDescription>
          <div className='Gifs'>
            {gifs
              .filter((_, index) => index < 4)
              .map((similarGif) => (
                <ResultItem
                  key={similarGif.id}
                  className='overlayGradient medium'
                  id={similarGif?.id}
                >
                  <img
                    src={similarGif?.image}
                    alt={similarGif?.title}
                    className='Gif'
                  />
                  <p className='ResultName' />
                </ResultItem>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

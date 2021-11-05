import { Helmet } from 'react-helmet'
import { useRoute } from 'wouter'
import ResultItem from '../../components/ResultItem'
import { Subtitle, TextDescription } from '../../components/TextSeparator'
import { useGifDetail } from '../../hooks/useGifDetail'

import './style.css'

export default function Details() {
  const [, { id }] = useRoute('/detail/:id')
  const [gif, gifs] = useGifDetail(id)

  const title = gif?.title.trim().length > 0 ? gif.title : 'Anonymous Gif'
  const description = `Details of this fantastic gif ${title}`

  return (
    <div className='container'>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Helmet>
      <Subtitle>{gif?.title}</Subtitle>

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

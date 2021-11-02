import { useLocation, useRoute } from 'wouter'
import { Subtitle } from '../../components/TextSeparator'
import ResultItem from '../../components/ResultItem'
import { useGifs } from '../../hooks/useGifs'

import './style.css'

export default function SearchResults() {
  const [match, params] = useRoute('/search/:name')

  if (!match) {
    useLocation('/')
    return null
  }

  const { name: keyword } = params
  const { gifs, loading } = useGifs({ keyword })

  // TODO: [_]infinite scroll
  // FIXME: replace to component Loading
  // FIXME: change [ResultItem] with [generic Link] use component composition

  return (
    <>
      <Subtitle content={`Result of ${decodeURI(keyword)}`} />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className='Results'>
          {gifs.map(({ id, image, title }) => (
            <ResultItem key={id} id={id} className='Result overlayGradient'>
              <img src={image} alt={title} className='TrendingImg' />
              <h4 className='ResultName'>{title}</h4>
            </ResultItem>
          ))}
        </div>
      )}
    </>
  )
}

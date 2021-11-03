import ResultItem from '../../../components/ResultItem'
import useTrending from '../../../hooks/useTrending'
import { useNearScreen } from '../../../hooks/useNearScreen'

export function Trending() {
  const limit = 6

  const { trends } = useTrending({ limit })

  // FIXME: use a better way to render the trending, remove = trends[X]

  return (
    <section className='TrendingContent'>
      <ResultItem id={trends[0]?.id} className='Trending overlayGradient big'>
        <img
          src={trends[0]?.image}
          alt='trending gif'
          className='TrendingImg'
        />
      </ResultItem>
      <ResultItem
        id={trends[1]?.id}
        className='Trending overlayGradient medium'
      >
        <img
          src={trends[1]?.image}
          alt='trending gif'
          className='TrendingImg'
        />
      </ResultItem>
      <ResultItem
        id={trends[2]?.id}
        className='Trending overlayGradient medium'
      >
        <img
          src={trends[2]?.image}
          alt='trending gif'
          className='TrendingImg'
        />
      </ResultItem>

      <div className='smallContainer'>
        <ResultItem
          id={trends[3]?.id}
          className='Trending overlayGradient small'
        >
          <img
            src={trends[3]?.image}
            alt='trending gif'
            className='TrendingImg'
          />
        </ResultItem>
        <ResultItem
          id={trends[4]?.id}
          className='Trending overlayGradient small'
        >
          <img
            src={trends[4]?.image}
            alt='trending gif'
            className='TrendingImg'
          />
        </ResultItem>
        <ResultItem
          id={trends[5]?.id}
          className='Trending overlayGradient small'
        >
          <img
            src={trends[5]?.image}
            alt='trending gif'
            className='TrendingImg'
          />
        </ResultItem>
      </div>
    </section>
  )
}

export function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen('10px')

  return <div ref={fromRef}>{isNearScreen && <Trending />}</div>
}

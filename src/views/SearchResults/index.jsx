import React, { useEffect, useRef, useCallback } from 'react'
import { useRoute } from 'wouter'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'
import { Subtitle } from '../../components/TextSeparator'
import ResultItem from '../../components/ResultItem'
import { useGifs } from '../../hooks/useGifs'
import { useNearScreen } from '../../hooks/useNearScreen'
import Loading from '../../components/Loading'

import './style.css'

// TODO: change debounce  to throttle

export default function SearchResults() {
  const [matchByName, paramsByName] = useRoute('/search/:name')
  const [matchByNameAndCategory, paramsByNameAndCategory] = useRoute(
    '/search/:name/:rating'
  )

  let keyword
  let rating

  if (matchByName) {
    keyword = paramsByName.name
  }

  if (matchByNameAndCategory) {
    keyword = paramsByNameAndCategory.name
    rating = paramsByNameAndCategory.rating
  }

  const { gifs, loading, setPage } = useGifs({ keyword, limit: 12, rating })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    distance: '100px',
    externalRef: loading ? null : externalRef,
    once: false,
  })

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    []
  )

  useEffect(() => {
    if (isNearScreen) {
      debounceHandleNextPage()
    }
  }, [isNearScreen, debounceHandleNextPage])

  return (
    <>
      <Subtitle>
        Result of <span className='text-gradient'>{decodeURI(keyword)}</span>
      </Subtitle>

      {loading ? (
        <>
          <Helmet>
            <title>Loading...</title>
          </Helmet>
          <Loading />
        </>
      ) : (
        <>
          <Helmet>
            <title>{`results for ${decodeURI(keyword)}`}</title>
            <link
              rel='canonical'
              href='https://gift-party.vercel.app/search/'
            />
            <meta
              name='description'
              content='The best results for funny gifs, and more gifs !!'
            />
          </Helmet>
          <div className='Results'>
            {gifs.map(({ id, image, title }) => (
              <ResultItem
                key={`id:${id}+${title}=>${keyword}`}
                id={id}
                className='Result overlayGradient'
              >
                <img src={image} alt={title} className='TrendingImg' />
                <h4 className='ResultName'>{title}</h4>
              </ResultItem>
            ))}
          </div>
          <div className='viewer' ref={externalRef} />
        </>
      )}
    </>
  )
}

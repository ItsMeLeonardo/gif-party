import React, { useEffect, useRef, useCallback } from 'react'
import { useLocation, useRoute } from 'wouter'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'
import { Subtitle } from '../../components/TextSeparator'
import ResultItem from '../../components/ResultItem'
import { useGifs } from '../../hooks/useGifs'
import { useNearScreen } from '../../hooks/useNearScreen'

import './style.css'

// FIXME: replace to component Loading
// TODO: change debounce  to throttle

export default function SearchResults() {
  const [match, params] = useRoute('/search/:name')

  if (!match) {
    useLocation('/')
    return null
  }

  const { name: keyword } = params
  const { gifs, loading, setPage } = useGifs({ keyword, limit: 12 })
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
      <Subtitle content={`Result of ${decodeURI(keyword)}`} />

      {loading ? (
        <>
          <Helmet>
            <title>Loading...</title>
          </Helmet>
          <div>Loading...</div>
        </>
      ) : (
        <>
          <Helmet>
            <title>{`results for ${decodeURI(keyword)}`}</title>
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

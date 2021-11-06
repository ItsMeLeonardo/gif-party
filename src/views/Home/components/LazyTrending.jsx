import React, { Suspense } from 'react'
import Loading from '../../../components/Loading'
import { useNearScreen } from '../../../hooks/useNearScreen'

const Trending = React.lazy(() => import('./Trending'))
export function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '10px' })

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Loading />}>{isNearScreen && <Trending />}</Suspense>
    </div>
  )
}

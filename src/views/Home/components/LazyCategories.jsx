import React, { Suspense } from 'react'
import { useNearScreen } from '../../../hooks/useNearScreen'

const Categories = React.lazy(() => import('./Categories'))

export function LazyCategories() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '100px' })

  return (
    <section className='Categories' ref={fromRef}>
      <Suspense fallback='Loading'>
        {isNearScreen && <Categories fromRef={fromRef} />}
      </Suspense>
    </section>
  )
}

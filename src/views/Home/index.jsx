import { Subtitle, TextDescription } from '../../components/TextSeparator'
import { LazyCategories } from './components/Categories'
import Hero from './components/Hero'
import { LazyTrending } from './components/Trending'

import './style.css'

export default function Home() {
  // FIXME: fix the loading for trending and categories
  // FIXME: change the icon to img with srcSet

  return (
    <>
      <Hero />

      <div className='scroll'>
        <i className='scrollIcon' />
        <a href='#trending' className='btn white'>
          <span className='text-gradient'>scroll</span>
          <object
            title='arrowIcon'
            className='arrowIcon'
            type='image/svg+xml'
            data='src/static/icons/arrow-down.svg'
          />
        </a>
      </div>

      <Subtitle content='Trending' id='trending' />

      <LazyTrending />

      <Subtitle content='Categories' />
      <TextDescription>Choose a category that interesting you</TextDescription>

      <LazyCategories />
    </>
  )
}

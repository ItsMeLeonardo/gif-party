import { Helmet } from 'react-helmet'
import { Subtitle, TextDescription } from '../../components/TextSeparator'
import { LazyCategories } from './components/LazyCategories'
import Hero from './components/Hero'
import { LazyTrending } from './components/LazyTrending'

import './style.css'

export default function Home() {
  // FIXME: fix the loading for trending and categories
  // FIXME: change the icon to img with srcSet
  const description =
    'The best web app for search gifs, this page use react, css, js, vite, vercel, giphy API'

  return (
    <>
      <Helmet>
        <title>Gif Party 🥳</title>
        <meta name='description' content={description} />
      </Helmet>

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

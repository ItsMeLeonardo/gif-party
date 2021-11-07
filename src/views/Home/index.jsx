import { Helmet } from 'react-helmet'
import { Subtitle, TextDescription } from '../../components/TextSeparator'
import { LazyCategories } from './components/LazyCategories'
import Hero from './components/Hero'
import { LazyTrending } from './components/LazyTrending'

import './style.css'

export default function Home() {
  // FIXME: fix the loading for trending and categories

  const description =
    'The best web app for search gifs, this page use react, css, js, vite, vercel, giphy API'

  return (
    <>
      <Helmet>
        <title>Gif Party 🥳</title>
        <meta name='description' content={description} />
        <link rel='canonical' href='https://gift-party.vercel.app/' />
      </Helmet>

      <Hero />

      <div className='scroll'>
        <i className='scrollIcon' />
        <a href='#trending' className='btn white'>
          <span className='text-gradient'>scroll</span>
          <picture className='arrowIcon'>
            <source type='image/png' srcSet='/images/arrow-down.png' />
            <source type='image/webp' srcSet='/images/arrow-down.webp' />
            <img src='/icons/arrow-down.svg' alt='arrow icon' />
          </picture>
        </a>
      </div>

      <Subtitle id='trending'>Trending</Subtitle>

      <LazyTrending />

      <Subtitle>Categories</Subtitle>
      <TextDescription>Choose a category that interesting you</TextDescription>

      <LazyCategories />
    </>
  )
}

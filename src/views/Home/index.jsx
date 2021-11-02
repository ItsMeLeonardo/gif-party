import { Subtitle, TextDescription } from '../../components/TextSeparator'
import Categories from './components/Categories'
import Hero from './components/Hero'
import Trending from './components/Trending'
import CategoryItem from '../../components/CategoryItem'
import useCategories from '../../hooks/useCategories'

import './style.css'

export default function Home() {
  // TODO: easy loading for trending and categories
  // FIXME: fix the loading for trending and categories
  // FIXME: change the icon to img with srcSet

  const { categories, isLoading } = useCategories()

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

      <Trending />

      <Subtitle content='Categories' />
      <TextDescription>Choose a category that interesting you</TextDescription>

      <Categories>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          categories?.map((category) => (
            <CategoryItem name={category.name} key={category.name} />
          ))
        )}
      </Categories>
    </>
  )
}

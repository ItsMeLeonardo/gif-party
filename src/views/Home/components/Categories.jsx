import useCategories from '../../../hooks/useCategories'
import { useNearScreen } from '../../../hooks/useNearScreen'
import CategoryItem from '../../../components/CategoryItem'

function Categories() {
  const { categories, isLoading } = useCategories()

  return (
    <>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        categories?.map((category) => (
          <CategoryItem name={category.name} key={category.name} />
        ))
      )}
    </>
  )
}

export function LazyCategories() {
  const { isNearScreen, fromRef } = useNearScreen('100px')

  return (
    <section className='Categories' ref={fromRef}>
      {isNearScreen && <Categories fromRef={fromRef} />}
    </section>
  )
}

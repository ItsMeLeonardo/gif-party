import CategoryItem from '../../../components/CategoryItem'
import useCategories from '../../../hooks/useCategories'

export default function Categories() {
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

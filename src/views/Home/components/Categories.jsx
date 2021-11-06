import CategoryItem from '../../../components/CategoryItem'
import Loading from '../../../components/Loading'
import useCategories from '../../../hooks/useCategories'

export default function Categories() {
  const { categories, isLoading } = useCategories()

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        categories?.map((category) => (
          <CategoryItem name={category.name} key={category.name} />
        ))
      )}
    </>
  )
}

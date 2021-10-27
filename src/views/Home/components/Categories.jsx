import useCategories from "../../../hooks/useCategories";

export default function Categories() {
  const { categories, isLoading } = useCategories();
  return (
    <section className="Categories">

      {isLoading 
      ? <h1>Loading</h1>
      :categories?.map((category) => (
        <button key={category.name} className="btn white">
          <span className="text-gradient">
            {category.name}
          </span>
        </button>
      ))}
    </section>
  );
}

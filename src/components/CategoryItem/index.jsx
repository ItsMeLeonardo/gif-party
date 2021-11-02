import { Link } from 'wouter'

export default function CategoryItem({ name }) {
  return (
    <Link href={`/search/${name}`} className='btn white'>
      <button type='button' className='btn white'>
        <span className='text-gradient'>{name}</span>
      </button>
    </Link>
  )
}

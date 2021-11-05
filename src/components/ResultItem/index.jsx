import React from 'react'
import { Link } from 'wouter'
import './style.css'

function ResultItem({ id, children, className }) {
  return (
    <Link href={`/detail/${id}`}>
      <button type='button' className={className}>
        {children}
      </button>
    </Link>
  )
}

export default React.memo(
  ResultItem,
  (prevProps, nextProps) => prevProps.id === nextProps.id
)

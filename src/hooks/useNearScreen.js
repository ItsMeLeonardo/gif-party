import { useEffect, useState, useRef } from 'react'

export function useNearScreen({ distance = '100px' }) {
  const [isNearScreen, setIsNearScreen] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    const onChange = ([element], observer) => {
      if (element.isIntersecting) {
        setIsNearScreen(true)
        observer.unobserve(fromRef.current)
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    })

    observer.observe(fromRef.current)

    return () => observer.disconnect()
  })

  return { isNearScreen, fromRef }
}

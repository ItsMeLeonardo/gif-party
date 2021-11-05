import { useEffect, useRef } from 'react'

export default function useSEO({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | gif-party`
    }
  }, [title])

  useEffect(() => {
    if (description) {
      document
        .querySelector('meta[name="description"]')
        .setAttribute('content', description)
    }
  }, [description])
}

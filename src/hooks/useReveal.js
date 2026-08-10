import { useEffect, useRef } from 'react'

/** Adds the "in" class to an element once it scrolls into view. */
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}

import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale')
      .forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export function useCountUp(end, duration = 1800) {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      let start = null
      const isPercent = typeof end === 'string' && end.endsWith('%')
      const numEnd = isPercent ? parseFloat(end) : parseFloat(end)
      const suffix = isPercent ? '%' : (end.toString().includes('K') ? 'K' : '')
      const numVal = parseFloat(end)
      const step = ts => {
        if (!start) start = ts
        const p = Math.min((ts - start) / duration, 1)
        const ease = 1 - Math.pow(1 - p, 3)
        const cur = Math.round(ease * numVal)
        if (ref.current) ref.current.textContent = cur + suffix
        if (p < 1) requestAnimationFrame(step)
        else if (ref.current) ref.current.textContent = end
      }
      requestAnimationFrame(step)
      obs.disconnect()
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [end, duration])
  return ref
}

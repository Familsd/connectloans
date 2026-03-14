"use client"

import { useState, useEffect, useRef } from "react"

interface UseCountAnimationProps {
  end: number
  duration?: number
  startOnMount?: boolean
  isVisible?: boolean
}

export function useCountAnimation({
  end,
  duration = 2000,
  startOnMount = true,
  isVisible = true,
}: UseCountAnimationProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const frameRef = useRef<number>()
  const startTimeRef = useRef<number>()

  useEffect(() => {
    if (!isVisible || hasAnimated || !startOnMount) return

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp
      }

      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        setCount(end)
        setHasAnimated(true)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [end, duration, isVisible, hasAnimated, startOnMount])

  return count
}

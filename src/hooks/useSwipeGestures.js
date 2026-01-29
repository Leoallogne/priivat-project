import { useEffect, useRef } from 'react'

export function useSwipeGestures(onSwipeLeft, onSwipeRight) {
  const touchStart = useRef(0)
  const touchEnd = useRef(0)
  const elementRef = useRef(null)
  
  // Keep latest callbacks in ref to avoid re-binding listeners
  const callbacksRef = useRef({ onSwipeLeft, onSwipeRight })
  
  useEffect(() => {
    callbacksRef.current = { onSwipeLeft, onSwipeRight }
  }, [onSwipeLeft, onSwipeRight])

  const minSwipeDistance = 50

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const onTouchStart = (e) => {
      touchEnd.current = 0
      touchStart.current = e.targetTouches[0].clientX
    }

    const onTouchMove = (e) => {
      touchEnd.current = e.targetTouches[0].clientX
    }

    const onTouchEnd = () => {
      if (!touchStart.current || !touchEnd.current) return
      
      const distance = touchStart.current - touchEnd.current
      const isLeftSwipe = distance > minSwipeDistance
      const isRightSwipe = distance < -minSwipeDistance

      if (isLeftSwipe && callbacksRef.current.onSwipeLeft) {
        callbacksRef.current.onSwipeLeft()
      }
      if (isRightSwipe && callbacksRef.current.onSwipeRight) {
        callbacksRef.current.onSwipeRight()
      }
    }

    element.addEventListener('touchstart', onTouchStart, { passive: true })
    element.addEventListener('touchmove', onTouchMove, { passive: true })
    element.addEventListener('touchend', onTouchEnd)

    return () => {
      element.removeEventListener('touchstart', onTouchStart)
      element.removeEventListener('touchmove', onTouchMove)
      element.removeEventListener('touchend', onTouchEnd)
    }
  }, [minSwipeDistance])

  return elementRef
}

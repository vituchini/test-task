/* eslint-disable consistent-return */
/* eslint-disable no-multi-assign */
import { useEffect, useRef, useState } from 'react'

export function useIntersectionObserver(ref, options = {}, forward = true) {
	const [isIntersecting, setIsIntersecting] = useState(false)
	const [element, setElement] = useState(null)

	const observer = useRef(null)

	const cleanOb = () => {
		if (observer.current) {
			observer.current.disconnect()
		}
	}

	useEffect(() => {
		setElement(ref.current)
	}, [ref])

	useEffect(() => {
		if (!element) return
		cleanOb()
		const ob = (observer.current = new IntersectionObserver(
			([entry]) => {
				const isElementIntersecting = entry.isIntersecting
				if (!forward) {
					setIsIntersecting(isElementIntersecting)
				} else if (forward && !isIntersecting && isElementIntersecting) {
					setIsIntersecting(isElementIntersecting)
					cleanOb()
				}
			},
			{ ...options }
		))
		ob.observe(element)
		return () => {
			cleanOb()
		}
	}, [element, options])

	return isIntersecting
}

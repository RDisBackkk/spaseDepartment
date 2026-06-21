"use client"

import { useLayoutEffect, useRef } from "react"
import type React from "react"
import { useInView } from "motion/react"
import { annotate } from "rough-notation"
import { type RoughAnnotation } from "rough-notation/lib/model"

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket"

interface HighlighterProps {
  children: React.ReactNode
  action?: AnnotationAction
  color?: string
  strokeWidth?: number
  animationDuration?: number
  iterations?: number
  padding?: number
  multiline?: boolean
  isView?: boolean
  className?: string
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1,
  animationDuration = 600,
  iterations = 3,
  padding = 2,
  multiline = true,
  isView = false,
  className,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null)
  const annotationRef = useRef<RoughAnnotation | null>(null)

  const isInView = useInView(elementRef, {
    margin: "-10%",
  })

  // If isView is false, always show. If isView is true, wait for inView
  const shouldShow = !isView || isInView
  const shouldShowRef = useRef(shouldShow)
  shouldShowRef.current = shouldShow

  useLayoutEffect(() => {
    const element = elementRef.current
    if (!element) return

    const annotationConfig = {
      type: action,
      color,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline,
    }

    const currentAnnotation = annotate(element, annotationConfig)
    annotationRef.current = currentAnnotation

    const resizeObserver = new ResizeObserver(() => {
      if (annotationRef.current && shouldShowRef.current) {
        annotationRef.current.hide()
        annotationRef.current.show()
      }
    })

    resizeObserver.observe(element)
    resizeObserver.observe(document.body)

    return () => {
      currentAnnotation.remove()
      resizeObserver.disconnect()
      annotationRef.current = null
    }
  }, [
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ])

  useLayoutEffect(() => {
    if (annotationRef.current) {
      if (shouldShow) {
        annotationRef.current.show()
      } else {
        annotationRef.current.hide()
      }
    }
  }, [shouldShow])

  return (
    <span ref={elementRef} className={`relative inline bg-transparent ${className || ""}`}>
      {children}
    </span>
  )
}

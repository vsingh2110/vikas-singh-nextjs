'use client'

import { useEffect } from 'react'

export default function BlurBackgroundScript() {
  useEffect(() => {
    const figures = document.querySelectorAll('.prose figure:not(.float-left):not(.float-right):not(.image-pair figure)')
    figures.forEach((figure) => {
      const img = figure.querySelector('img')
      if (img && img.src) {
        (figure as HTMLElement).style.setProperty('--bg-image', `url(${img.src})`)
      }
    })
  }, [])

  return null
}

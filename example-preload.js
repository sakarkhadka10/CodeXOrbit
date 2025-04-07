'use client'

import ReactDOM from 'react-dom'

export function PreloadResources() {
  // Make sure to use the correct 'as' value for the resource type
  ReactDOM.preload('/your-resource.js', { as: 'script' })
  ReactDOM.preload('/your-font.woff2', { as: 'font' })
  
  return null
}
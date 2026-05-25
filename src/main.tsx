import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

/* META PIXEL */
declare global {
  interface Window {
    fbq: any
  }
}

!(function (f: any, b, e, v, n?: any, t?: any, s?: any) {
  if (f.fbq) return

  n = f.fbq = function () {
    n.callMethod
      ? n.callMethod.apply(n, arguments)
      : n.queue.push(arguments)
  }

  if (!f._fbq) f._fbq = n

  n.push = n
  n.loaded = true
  n.version = '2.0'
  n.queue = []

  t = b.createElement(e)
  t.async = true
  t.src = v

  s = b.getElementsByTagName(e)[0]
  s.parentNode.insertBefore(t, s)
})(
  window,
  document,
  'script',
  'https://connect.facebook.net/en_US/fbevents.js'
)

window.fbq('init', '4357377857865491')
window.fbq('track', 'PageView')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

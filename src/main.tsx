import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

//META
declare global {
  interface Window {
    fbq?: (...args: any[]) => void
    _fbq?: any
  }
}

;(function (f, b, e, v, n?: any, t?: any, s?: any) {
  if (f.fbq) return

  n = function (...args: any[]) {
    if (n.callMethod) {
      n.callMethod(...args)
    } else {
      n.queue.push(args)
    }
  }

  f.fbq = n
  f._fbq = n

  n.push = n
  n.loaded = true
  n.version = '2.0'
  n.queue = []

  t = b.createElement(e)
  t.async = true
  t.src = v

  s = b.getElementsByTagName(e)[0]
  s.parentNode?.insertBefore(t, s)
})(
  window,
  document,
  'script',
  'https://connect.facebook.net/en_US/fbevents.js'
)

window.fbq?.('init', '4357377857865491')
window.fbq?.('track', 'PageView')
// UTMFY
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.pixelId = "6a14c7ae54e0ce0246c0f66f";
  const utmScript = document.createElement("script");
  utmScript.setAttribute("async", "");
  utmScript.setAttribute("defer", "");
  utmScript.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
  document.head.appendChild(utmScript);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

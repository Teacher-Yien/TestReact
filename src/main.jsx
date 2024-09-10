import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "animate.css"
import AOS from 'aos'
import "aos/dist/aos.css"
import "aos/dist/aos.js"
AOS.init()
import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import  "bootstrap/dist/js/bootstrap.js"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

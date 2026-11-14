import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Fuentes autoalojadas (sin peticiones a terceros ni CSS que bloquee el render)
import '@fontsource-variable/inter'
import '@fontsource-variable/plus-jakarta-sans'
import './styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import Gokul from './Gokul'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Gokul />
    
  </StrictMode>,
)

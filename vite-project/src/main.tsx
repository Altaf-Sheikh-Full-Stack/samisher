import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Marketing/pages/Home/Home'
import Connect from './Marketing/Components/Pricing/Connect/Connect/Connect'
import Pricing from './Marketing/pages/Pricing/Pricing'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Pricing/>   
  </StrictMode>,
)

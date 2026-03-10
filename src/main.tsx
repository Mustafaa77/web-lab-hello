import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UIKit from './UIKit.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UIKit />
  </StrictMode>,
)

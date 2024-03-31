import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './assets/styles/reset.scss'
import './assets/styles/global.scss'
import { IsActiveProvider } from './providers/CheckActiveContext.tsx'
import { ModalProvider } from './providers/ModalContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <IsActiveProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </IsActiveProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
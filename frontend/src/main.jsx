import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'sonner'
import { AppContextProvider } from './context/Appcontextprovider'


createRoot(document.getElementById('root')).render(
  <StrictMode>

<AppContextProvider>
      <App />
      <Toaster />
    </AppContextProvider>
 
  </StrictMode>,
)

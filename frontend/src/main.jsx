import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'sonner'
import  dbstore from './redux/dbstore.jsx'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

const persistor = persistStore(dbstore);

createRoot(document.getElementById('root')).render(
  <StrictMode>

<Provider store={dbstore}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Toaster />
      </PersistGate>  
    </Provider>
 
  </StrictMode>,
)

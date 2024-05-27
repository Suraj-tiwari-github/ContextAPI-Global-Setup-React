import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppContext from './context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
      {/* AppContext is our createContext from react which we use with useContext to pass the state values globally with the help of wrapping our main <App/> component inside of AppContext. */}
    <App />
    </AppContext>
  </React.StrictMode>,
)

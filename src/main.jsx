import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SOurceContext from './SOurceContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SOurceContext>
    <App />
    </SOurceContext>
  </React.StrictMode>,
)

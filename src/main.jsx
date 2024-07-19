import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Quote from './QuoteD.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Quote/>
    <App />
    <Quote/>
  </React.StrictMode>,
)

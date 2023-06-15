import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.tsx'
import './index.css'
import Home from './pages/home.tsx'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
)

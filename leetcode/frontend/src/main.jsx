import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container p-4 justify-self-center'>

    <Navbar/>
    <App />
    </div>
  </React.StrictMode>,
)

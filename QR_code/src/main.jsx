import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import './Qrcode.css'
import { Qrcode } from './Qrcode'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Qrcode/>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import AppContextProviders from './AppContextProviders'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppContextProviders />
  </React.StrictMode>,
  document.getElementById('root')
)

import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

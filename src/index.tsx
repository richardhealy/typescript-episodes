import React from 'react'
import ReactDom from 'react-dom'

import { StoreProvider } from './store/index'

import App from './components/App'

const appEl = document.getElementById('app')

ReactDom.render(
  <StoreProvider>
    <App />
  </StoreProvider>, 
  appEl
)
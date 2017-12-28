import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './Components/App/index.jsx'
import Store from './Store/configure'

import 'reset-css/reset.css'
import './style.sass'

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
document.getElementById('root'))

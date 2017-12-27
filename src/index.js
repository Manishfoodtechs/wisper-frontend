import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './Components/App'
import Store from './Store/configure'

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
document.getElementById('root'))

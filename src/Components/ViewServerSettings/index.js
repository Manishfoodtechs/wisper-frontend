import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class ViewServerSettings extends Component {
  render () {
    return (
      <div>
        <h1>Server: Settings</h1>
        <Link to="/server">Back</Link>
      </div>
    )
  }
}
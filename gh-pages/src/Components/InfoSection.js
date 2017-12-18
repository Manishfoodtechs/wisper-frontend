import React, { Component } from 'react'

import './InfoSection.css'

export default class InfoSection extends Component {
  render () {
    return (
      <div className={'InfoSection ' + this.props.className}>
        {this.props.children}
      </div>
    )
  }
}
import React, { Component } from 'react'

import UI from './UI'

import './InfoSection.css'

export default class InfoSection extends Component {
  render () {
    return (
      <div className={'InfoSection ' + this.props.className}>
        <UI.Container>
          <UI.Section>
            {this.props.children}
          </UI.Section>
        </UI.Container>
      </div>
    )
  }
}
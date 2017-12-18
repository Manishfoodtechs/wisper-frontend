import React, { Component } from 'react'

import classNames from 'classnames'

import { Section } from '../UI'

import './InfoSection.css'

export default class InfoSection extends Component {
  render () {
    return (
      <Section className={classNames("InfoSection", this.props.className)}>
        {this.props.children}
      </Section>
    )
  }
}
import React, { Component } from 'react'
import './Hero.css'
import Config from '../config'
import UI from './UI'

import { Spin } from 'antd'

export default class Hero extends Component {
  constructor (props) {
    super(props)

    this.state = {
      repo: false
    }

    this.fetchRepoData()
  }

  fetchRepoData () {
    fetch(Config.api.baseUrl + '/repos/' + this.props.repo).then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        repo: json
      })
    })
  }

  render () {
    return (
      <div className="UI__Hero">
        <UI.Container>
          {this.renderHeroContent()}
        </UI.Container>
      </div>
    )
  }

  renderHeroContent () {
    if (this.state.repo) {
      return (
        <div className="UI__Hero__Inner">
          <h1 className="UI__Hero__Title">
            Wisper
            <small className="UI__Hero__TitleRepo">{this.state.repo.full_name}</small>
          </h1>
          <p className="UI__Hero__TagLine">{this.state.repo.description}</p>
        </div>
      )
    } else {
      <Spin />
    }
  }
}
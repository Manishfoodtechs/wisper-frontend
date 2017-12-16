import React, { Component } from 'react'
import './Hero.css'
import Config from '../config'
import UI from './UI'
import HeroWaves from '../Assets/hero-waves.svg'
import { Spin } from 'antd'

const heroBackgroundStyles = {
  backgroundImage: `url("${HeroWaves}")`
}

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
      <div className="Hero">
        {this.renderHeroContent()}
      </div>
    )
  }

  renderHeroContent () {
    if (this.state.repo) {
      return (
        <div class="Hero__Wrapper">
          <div className="Hero__Inner">
            <UI.Container>
              <h1 className="Hero__Title">Wisper</h1>
              <p className="Hero__TagLine">Wisper is a open-source alternative to Slack, Discord etc. for selfhosting built by the community.</p>
            </UI.Container>
          </div>
          <div class="Hero__Background" style={heroBackgroundStyles}></div>
        </div>
      )
    } else {
      <Spin />
    }
  }
}
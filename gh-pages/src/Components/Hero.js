import React, { Component } from 'react'
import './Hero.css'
import Config from '../config'

import LogoWhite from '../Assets/logo-white.svg'

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
        <div className="Hero__Wrapper">
          <div className="Hero__Inner">
            <img className="Hero__Logo" src={LogoWhite} alt="Wisper" />
            <p className="Hero__TagLine">Wisper is a open-source alternative to Slack, Discord etc. for selfhosting built by the community.</p>
          </div>
        </div>
      )
    } else {

    }
  }
}
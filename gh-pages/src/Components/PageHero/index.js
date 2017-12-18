import React, { Component } from 'react'

import { Section } from '../UI'

import './index.sass'
import Config from '../../config'

import { Hero, HeroHead, HeroBody } from '../UI'

import LogoWhite from '../../Assets/logo-white.svg'

export default class PageHero extends Component {
  render () {
    return (
      <Hero className="PageHero is-primary is-medium">
        <HeroBody>
          <div className="container has-text-centered">
            <img className="PageHero__Logo" src={LogoWhite} alt="Wisper" />
            <p className="PageHero__TagLine is-size-4 is-size-6-mobile">Wisper is a open-source alternative to Slack, Discord etc. for selfhosting built by the community.</p>
          </div>
        </HeroBody>
      </Hero>
    )
  }
}
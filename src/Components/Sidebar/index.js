import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import './style.sass'

import DemoServer from '../../Helpers/demoServer.json'

export default class Sidebar extends Component {
  render () {
    return (
      <nav className="Sidebar">
        <header className="Sidebar__header">
          <Link to="/">{DemoServer.title}</Link>
        </header>
        <ul className="Sidebar__navigation">
          {this.renderChannelItems()}
        </ul>
        <ul className="Sidebar__serverNavigation">
          <li className="Sidebar__serverNavigationItem">
            <Link to="/server/settings">Server Settings</Link>
          </li>
        </ul>
      </nav>
    )
  }

  renderChannelItems () {
    return DemoServer.channels.map((channel, key) => {
      return (
        <li key={key} className="SidebarChannel">
          <Link to={`/server/channels/${key}`}>{channel.name}</Link>
        </li>
      )
    })
  }
}
import React, { Component } from 'react'

import { Link } from 'react-router-dom'

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
      </nav>
    )
  }

  renderChannelItems () {
    return DemoServer.channels.map((channel, key) => {
      return (
        <li key={key} className="SidebarChannel">
          <Link to={`/server/channels/${channel.id}`}>{channel.name}</Link>
        </li>
      )
    })
  }
}
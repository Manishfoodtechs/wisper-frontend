import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import SidebarGroup from '../SidebarGroup/index.jsx'
import './style.sass'
import DemoServer from '../../Helpers/demoServer.json'

export default class Sidebar extends Component {
  render () {
    return (
      <nav className="Sidebar">
        <header className="Sidebar__header">
          <Link className="Sidebar__serverTitle" to="/server">{DemoServer.title}</Link>
        </header>
        <div className="Sidebar__navigation">
          {this.renderChannelItems()}
        </div>
        <ul className="Sidebar__serverNavigation">
          <li className="Sidebar__serverNavigationItem">
            <NavLink className="Sidebar__serverNavigationLink" activeClassName="Sidebar__serverNavigationLink--active" to="/server/settings">Server</NavLink>
          </li>
          <li className="Sidebar__serverNavigationItem">
            <NavLink className="Sidebar__serverNavigationLink" activeClassName="Sidebar__serverNavigationLink--active" to="/account">Account</NavLink>
          </li>
        </ul>
      </nav>
    )
  }

  renderChannelItems () {
    return DemoServer.groups.map((group, key) => {
      return (
        <SidebarGroup key={key} title={group.title} items={group.items} />
      )
    })
  }
}
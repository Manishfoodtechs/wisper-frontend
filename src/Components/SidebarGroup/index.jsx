import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './style.sass'

export default class SidebarGroup extends Component {
  render () {
    return (
      <div className="SidebarGroup">
        <span className="SidebarGroup__title">{this.props.title}</span>
        <ul className="SidebarGroup__items">
          {this.renderItems()}
        </ul>
      </div>
    )
  }

  renderItems () {
    return this.props.items.map((item, key) => {
      return (
        <li className="SidebarGroup__item">
          <NavLink key={key} className="SidebarGroup__itemLink" activeClassName="SidebarGroup__itemLink--active" to={`/server/channels/${item.id}`} title={item.name}>
            <span className="SidebarGroup__itemIcon">#</span>
            <span className="SidebarGroup__itemTitle">{item.name}</span>
          </NavLink>
        </li>
      )
    })
  }
}
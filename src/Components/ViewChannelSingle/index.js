import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class ViewChannelSingle extends Component {
  constructor (props) {
    super(props)

    this.state = {
      channelId: this.props.match.params.channelId
    }
  }

  render () {
    return (
      <div>
        <h1>Channel: {this.state.channelId}</h1>
        <Link to={this.getSettingsLink()}>Settings</Link>
      </div>
    )
  }

  getSettingsLink () {
    return `/server/channels/${this.state.channelId}/settings`
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      channelId: newProps.match.params.channelId
    })
  }
}

export default withRouter(ViewChannelSingle)
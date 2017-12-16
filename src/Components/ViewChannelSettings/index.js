import React, { Component } from 'react'

class ViewChannelSettings extends Component {
  constructor (props) {
    super(props)

    this.state = {
      channelId: this.props.match.params.channelId
    }
  }

  render () {
    return (
      <div>
        <h1>Channel Settings: {this.state.channelId}</h1>
      </div>
    )
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      channelId: newProps.match.params.channelId
    })
  }
}

export default ViewChannelSettings
import { Component } from 'react'

export default class ChannelConnector extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentChannel: this.props.channelId,
      streamVoice: this.props.streamVoice,
      streamVideo: this.props.streamVideo
    }
  }

  render () {
    console.log('Channel-Connector rendered with state', this.state)
    return null
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      currentChannel: newProps.channelId,
      streamVoice: newProps.streamVoice,
      streamVideo: newProps.streamVideo
    })
  }

  componentDidMount () {
    console.log('Channel-Connector mounted with state', this.state)
  }
}
import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ViewHome from '../ViewHome'
import ViewServer from '../ViewServer'
import ViewServerSettings from '../ViewServerSettings'
import ViewChannels from '../ViewChannels'
import ViewChannelSingle from '../ViewChannelSingle'
import ViewChannelSettings from '../ViewChannelSettings'
import ChannelConnector from '../ChannelConnector'
import Sidebar from '../Sidebar'

// import DemoServer from '../../Helpers/demoServer.json'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentChannel: false,
      streamVoice: false,
      streamVideo: false
    }
  }

  render () {
    return (
      <div className="App">
        <ChannelConnector
          channelId={this.state.currentChannel}
          streamVoice={this.state.streamVoice}
          streamVideo={this.state.streamVideo} />
        <Router>
          <div>
            <Sidebar />
            <Switch>
              <Route exact path="/" component={ViewHome} />
              <Route exact path="/server" component={ViewServer} />
              <Route exact path="/server/settings" component={ViewServerSettings} />
              <Route exact path="/server/channels" component={ViewChannels} />
              <Route exact path="/server/channels/:channelId" component={ViewChannelSingle} />
              <Route exact path="/server/channels/:channelId/settings" component={ViewChannelSettings} />
            </Switch>
          </div>
        </Router>
        <hr />
        <button onClick={this.handleConnectClick.bind(this)} disabled={(this.state.currentChannel) ? 'disabled': false}>Connect to Voice/Video Channel 1</button>
        <button onClick={this.handleDisconnectClick.bind(this)} disabled={(!this.state.currentChannel) ? 'disabled': false}>Disconnect from Voice/Video</button>
      </div>
    );
  }

  handleConnectClick () {
    this.setState({
      currentChannel: 1,
      streamVoice: true,
      streamVideo: false
    })
  }

  handleDisconnectClick () {
    this.setState({
      currentChannel: false,
      streamVoice: false,
      streamVideo: false
    })
  }
}

export default App;

import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ViewHome from '../ViewHome/index.jsx'
import ViewServer from '../ViewServer/index.jsx'
import ViewServerSettings from '../ViewServerSettings/index.jsx'
import ViewChannels from '../ViewChannels/index.jsx'
import ViewChannelSingle from '../ViewChannelSingle/index.jsx'
import ViewChannelSettings from '../ViewChannelSettings/index.jsx'

// import DemoServer from '../../Helpers/demoServer.json'

import './style.sass'

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
        <Router>
          <Switch>
            <Route exact path="/" component={ViewHome} />
            <Route exact path="/server" component={ViewServer} />
            <Route exact path="/server/settings" component={ViewServerSettings} />
            <Route exact path="/server/channels" component={ViewChannels} />
            <Route exact path="/server/channels/:channelId" component={ViewChannelSingle} />
            <Route exact path="/server/channels/:channelId/settings" component={ViewChannelSettings} />
          </Switch>
        </Router>
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

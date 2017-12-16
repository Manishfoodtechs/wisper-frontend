import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ViewHome from '../ViewHome'
import ViewServer from '../ViewServer'
import ViewServerSettings from '../ViewServerSettings'
import ViewChannels from '../ViewChannels'
import ViewChannelSingle from '../ViewChannelSingle'
import ViewChannelSettings from '../ViewChannelSettings'
import Sidebar from '../Sidebar'

class App extends Component {
  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;

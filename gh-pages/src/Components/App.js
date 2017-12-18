import React, { Component } from 'react';

import 'bulma/css/bulma.css'

import Config from '../config'

import Hero from './Hero'
import InfoSection from './InfoSection'

import { Button } from './UI'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero repo={Config.repository}></Hero>
        <InfoSection title="About Wisper">
            <h3>About Wisper</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ducimus placeat tempora voluptatibus? Modi architecto, quo exercitationem, nam asperiores et odio repellendus, praesentium expedita saepe voluptatem accusamus suscipit natus vero!</p>
            <p>Nihil ducimus suscipit laborum quam architecto unde obcaecati non tenetur vel earum, molestiae aperiam tempore ad qui! Assumenda doloribus iste, laboriosam aperiam officia hic voluptatibus, quos, rem explicabo libero fugiat!</p>
            <Button>Hello world</Button>
            <Button buttonStyle="primary">Primary Button</Button>
            <Button buttonStyle="link">Link Button</Button>
            <Button buttonStyle="info">Info Button</Button>
            <Button buttonStyle="success">Success Button</Button>
            <Button buttonStyle="warning">Warning Button</Button>
            <Button buttonStyle="danger">Danger Button</Button>
            <h3>About Wisper</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ducimus placeat tempora voluptatibus? Modi architecto, quo exercitationem, nam asperiores et odio repellendus, praesentium expedita saepe voluptatem accusamus suscipit natus vero!</p>
            <p>Nihil ducimus suscipit laborum quam architecto unde obcaecati non tenetur vel earum, molestiae aperiam tempore ad qui! Assumenda doloribus iste, laboriosam aperiam officia hic voluptatibus, quos, rem explicabo libero fugiat!</p>
            <h3>About Wisper</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ducimus placeat tempora voluptatibus? Modi architecto, quo exercitationem, nam asperiores et odio repellendus, praesentium expedita saepe voluptatem accusamus suscipit natus vero!</p>
            <p>Nihil ducimus suscipit laborum quam architecto unde obcaecati non tenetur vel earum, molestiae aperiam tempore ad qui! Assumenda doloribus iste, laboriosam aperiam officia hic voluptatibus, quos, rem explicabo libero fugiat!</p>
        </InfoSection>
      </div>
    );
  }
}

export default App;

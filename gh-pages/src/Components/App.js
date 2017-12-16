import React, { Component } from 'react';

import 'antd/dist/antd.css'
import UI from './UI'
import { Button } from 'antd'

import Config from '../config'

import Hero from './Hero'
import InfoSection from './InfoSection'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero repo={Config.repository}></Hero>
        <InfoSection title="About Wisper">
          <UI.SectionColumn>
            <h3>About Wisper</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ducimus placeat tempora voluptatibus? Modi architecto, quo exercitationem, nam asperiores et odio repellendus, praesentium expedita saepe voluptatem accusamus suscipit natus vero!</p>
            <p>Nihil ducimus suscipit laborum quam architecto unde obcaecati non tenetur vel earum, molestiae aperiam tempore ad qui! Assumenda doloribus iste, laboriosam aperiam officia hic voluptatibus, quos, rem explicabo libero fugiat!</p>
            <p>
              <Button type="primary" href="#" size="large">Read more about Wisper</Button>
            </p>
          </UI.SectionColumn>
          <UI.SectionColumn>
            <h3>About Wisper</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ducimus placeat tempora voluptatibus? Modi architecto, quo exercitationem, nam asperiores et odio repellendus, praesentium expedita saepe voluptatem accusamus suscipit natus vero!</p>
            <p>Nihil ducimus suscipit laborum quam architecto unde obcaecati non tenetur vel earum, molestiae aperiam tempore ad qui! Assumenda doloribus iste, laboriosam aperiam officia hic voluptatibus, quos, rem explicabo libero fugiat!</p>
            <p>
              <Button type="primary" href="#" size="large">Download the latest release</Button>
            </p>
          </UI.SectionColumn>
          <UI.SectionColumn>
            <h3>About Wisper</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ducimus placeat tempora voluptatibus? Modi architecto, quo exercitationem, nam asperiores et odio repellendus, praesentium expedita saepe voluptatem accusamus suscipit natus vero!</p>
            <p>Nihil ducimus suscipit laborum quam architecto unde obcaecati non tenetur vel earum, molestiae aperiam tempore ad qui! Assumenda doloribus iste, laboriosam aperiam officia hic voluptatibus, quos, rem explicabo libero fugiat!</p>
            <p>
              <Button type="secondary" href="#" size="large">Read more</Button>
            </p>
          </UI.SectionColumn>
        </InfoSection>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import './App.sass'

import AssetNetwork from '../../Assets/network.svg'

import Config from '../../config'

import PageHero from '../PageHero'
import InfoSection from '../InfoSection'

import { Button } from '../UI'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHero repo={Config.repository}></PageHero>
        <InfoSection className="is-medium">
          <div class="columns">
            <div class="column">
              <h2 class="is-size-3">What is Wisper?</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas praesentium ipsam pariatur ab iste eligendi fuga consectetur! Eligendi maiores reiciendis, voluptate alias quam saepe sequi impedit, sed doloribus amet repellat!</p>
              <p>Labore quis fugiat, aspernatur id porro maxime temporibus eum, voluptate beatae delectus nam eligendi libero, eius asperiores! Ut iusto repudiandae voluptas cum harum saepe deleniti minus sit quo? Inventore, nostrum.</p>
              <p>Quae, maiores repellendus? Optio, qui! Cupiditate dolor, quia facere beatae delectus laboriosam! Vero sequi expedita vel perferendis. Illo libero qui hic rem, id, vel ad itaque corrupti doloribus iusto quam.</p>
            </div>
            <div class="column">
              <img src={AssetNetwork} />
            </div>
          </div>
        </InfoSection>
        <InfoSection className="is-medium">
          <div class="columns">
            <div class="column">

            </div>
            <div class="column">
              <h2 class="is-size-3">What is Wisper?</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas praesentium ipsam pariatur ab iste eligendi fuga consectetur! Eligendi maiores reiciendis, voluptate alias quam saepe sequi impedit, sed doloribus amet repellat!</p>
              <p>Labore quis fugiat, aspernatur id porro maxime temporibus eum, voluptate beatae delectus nam eligendi libero, eius asperiores! Ut iusto repudiandae voluptas cum harum saepe deleniti minus sit quo? Inventore, nostrum.</p>
              <p>Quae, maiores repellendus? Optio, qui! Cupiditate dolor, quia facere beatae delectus laboriosam! Vero sequi expedita vel perferendis. Illo libero qui hic rem, id, vel ad itaque corrupti doloribus iusto quam.</p>
            </div>
          </div>
        </InfoSection>
      </div>
    );
  }
}

export default App;

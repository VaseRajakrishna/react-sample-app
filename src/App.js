import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Slider from './BannerSection/Slider';
import Person from './Person/Person';
import Header from './HeaderSection/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>
      <Slider></Slider>
        <div className="container-fluid">
          <div className="row">
            <Person></Person>
            <Person></Person>
            <Person></Person>
            <Person></Person>
          </div>
        </div>

      
      </div>
    );
  }
}

export default App;

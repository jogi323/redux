import React, { Component } from 'react';
import './css/App.css';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>        
        {this.props.children}
      </div>
    );
  }
}

export default App;

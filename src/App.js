import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipesWrapper from './components/Recipes';


class App extends Component {
  render() {
    return (
      <div className="App">
        <RecipesWrapper />
      </div>
    );
  }
}

export default App;

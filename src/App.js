import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome.js'

class App extends Component {
  render() {
    const names = ["Pedro", "Juan", "Luquitas"]
    return (
      <div>
        <div>
          <Welcome name="Marina" />
          <Welcome name="Saccal" />
        </div>

        <div>
          {names.map(name =>
            <Welcome name={name} />
          )}
        </div>

        <ul>
          {names.map(name =>
            <li>{name}</li>
          )}
        </ul>
      </div>
    );

  }
}
export default App;

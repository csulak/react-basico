import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      tasks: ["tarea 1", "tarea 2"]

    }
  }


  render() {
    return (
      <div>
        <h1> Hola Mundo</h1>
        <ul>
          {this.state.tasks.map(task =>
            <li> {task}</li>)}
        </ul>
      </div>
    )
  }

  changeTitle() {
    this.setState({
      title: "nuevo titulo"
    })
  }
}

export default App;

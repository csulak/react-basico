import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
class App extends Component {
  constructor() {
    super()

    this.state = {
      names: []
    }
    axios.get("http://localhost:3001/names")
      .then(response => {
        console.log(response)
        this.setState({
          names: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <h1>Hola Mundito</h1>
        <ul>
          {this.state.names.map(name =>
            <li key={name}> {name} </li>
            // se le agrega la key name que va a ser unica
            // ya que esto es obligatorio dentro del contrato de react
          )}
        </ul>
      </div>
    )
  }

}

export default App;

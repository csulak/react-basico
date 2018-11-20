import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap'

class App extends Component {
  constructor() {
    super()
    this.changeTitle = this.changeTitle.bind(this)
    this.state = {
      title: "Hola mundo desde Estado"
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <Button bsStyle="primary"> Primary</Button>
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

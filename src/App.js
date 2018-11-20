import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router'
import './App.css';
//esto en la vida real deberia estar C/U en un archivo separado
const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const NoMatch = () => <h1>Pagina no encontrada</h1>
const Message = (props) => <h1>Mensaje {props.params.id}</h1>

const Template = (props) => {
  return (
    <div>
      <h1>Mi super app jojo</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
      </ul>
      {props.children}
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>

          <Route path="/" component={Template}>
            <IndexRoute component={Home} />
            <Route path="about" component={About} />
          </Route>
          <Route path="messages/:id" component={Message} />
          <Route path="*" component={NoMatch} />
        </Router>
      </div>
    )
  }
}



export default App;

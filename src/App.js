import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 

/*
class Person extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h3>a person</h3>
        <div>{this.props.name}</div>
        <div>{this.props.age}</div>
      </div>
    )
  }
}
*/

let Person = ({name, age}) => (
  <div>
   <h2>A person</h2>
   <p>{name}</p>
   <p>{age}</p>
  </div>
)

class PeopleContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [
        {name: 'bob', age: 40},
        {name: 'janet', age: 40},
        {name: 'summers', age: 10},
      ],
    }
  }
  render() {
    let people = this.state.people.map(person => <Person name={person.name} age={person.age}/>)
      return (
        <div>{people}</div>
      )
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <h1>Best site ever</h1>
        <PeopleContainer/>
      </div>
    )
  }
  /*
  constructor(props) {
    super(props)
    this.state = {
      people: [
        {name: 'bob', age: 40},
        {name: 'janet', age: 40},
        {name: 'summers', age: 10},
      ],
    }
  }

  render() {
    let people = this.state.people.map(person => <Person name={person.name} age={person.age}/>)
    return (
      <div>
        <h1>Best site ever</h1>
        {people}
      </div>
    )
  }
  */
}

export default App;

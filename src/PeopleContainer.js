import React, { Component } from 'react';
import Person from './Person'

export default class PeopleContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [
        {name: 'bob', age: 40},
        {name: 'janet', age: 40},
        {name: 'summers', age: 10},
      ],
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    console.log('clicked')
    this.setState({
      people: [...this.state.people, {name: 'bob2', age: NaN}]
    })
  }

  render() {
    let people = this.state.people.map(person => <Person name={person.name} age={person.age}/>)
      return (
        <div>
          {people}
          <button onClick={this.handleClick}>Click me!</button>
        </div>
      )
  }
}

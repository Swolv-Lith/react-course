import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'foudfjcf', name: 'Nicco', age: 28 },
      { id: 'oiecnkjd', name: 'Marshall', age: 25 },
      { id: 'cmdiofha', name: 'Marcus', age: 23 },
    ],
      showPersons: false }

  nameChangeHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p =>  p.id === id )

    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState( { persons: persons,
      showPersons: false } ) }

  deletePersonHandler = (personIndex) => {
    // .slice() copy the persons state into persons
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState( { persons: persons } )  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState( { showPersons: !doesShow } ) }

  render() {
    let persons = null

    if ( this.state.showPersons ) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={ event => this.nameChangeHandler(event, person.id) }
            />
          } ) }
        </div> ) }

    return (
      <div className="App">
        <h1>Hi, i'm a React App</h1>
        <h2>This is really working!</h2>
        <button
          className='button'
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    )  }  }

export default App

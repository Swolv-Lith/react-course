import React, { Component } from "react";
import styled from "styled-components";
import Person from "./Person/Person";
import "./App.css";

const StyledBtn = styled.button`
  background-color: ${(props) => (props.alt ? "red" : "green")};
  color: white;
  font: inherit;
  border: 2px solid #483d8b;
  box-shadow: 0 2px 3px #8470ff;
  padding: 8px;

  &:hover {
    background-color: lightgreen;
    cursor: pointer;
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: "foudfjcf", name: "Nicco", age: 28 },
      { id: "oiecnkjd", name: "Marshall", age: 25 },
      { id: "cmdiofha", name: "Marcus", age: 32 },
    ],
    showPersons: false,
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons, showPersons: false });
  };

  deletePersonHandler = (personIndex) => {
    // .slice() copy the persons state into persons
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, i'm a React App</h1>
        <h2>This is really working!</h2>
        <StyledBtn
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </StyledBtn>
        {persons}
      </div>
    );
  }
}

export default App;

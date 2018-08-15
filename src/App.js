import React, { Component } from 'react';
// import logo from './logo.svg';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id: 'asfa1', name: 'Max', age: 28},
      {id: 'vasdf1', name: 'Manu', age: 29},
      {id: 'asdf11', name: 'Stephanie', age: 26}
    ],
    showPersons: false
  }


  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {...this.state.persons[personIndex]}; // using the spread operator to create a copy of a person object, without mutating it
    person.name = event.target.value;
    const persons = [...this.state.persons]; // this is to create a copy of persons, i.e. without mutating the state
    persons[personIndex] = person;
    this.setState ({persons: persons,
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; // this is to create a copy of persons, i.e. without mutating the state
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I&apos;m a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>

        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {persons}

      </div>
    );
  }
}

export default App;

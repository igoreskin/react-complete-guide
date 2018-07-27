import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  }


  nameChangeHandler = (event) => {
    this.setState ({persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 29},
      {name: 'Stephanie', age: 27}
    ],
    showPersons: false,
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div> // this is how a list is rendered: 
          {this.state.persons.map((person, index) => {
            return <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I&apos;m a React App</h1>
        <p>This is really working!</p>

        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {persons}

      </div>
    );
  }
}

export default App;

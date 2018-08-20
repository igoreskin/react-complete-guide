import React, { Component } from 'react';
// import logo from './logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor', props)
    this.state = {
      persons: [
        {id: 'asfa1', name: 'Max', age: 28},
        {id: 'vasdf1', name: 'Manu', age: 29},
        {id: 'asdf11', name: 'Stephanie', age: 26}
      ],
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState)
    return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate')
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
    console.log('[App.js] Inside render()')
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;

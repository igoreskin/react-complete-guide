import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside constructor', props)
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()')
  }

  render() {
    console.log('[Person.js] Inside render()')
    return (
      // <div className={classes.Person}>
      <WithClass classes={classes.Person}>
        <p onClick={this.props.click}>I&apos;m {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </WithClass>
      // </div>
    )

    // return [
    //   <p onClick={this.props.click}>I&apos;m {this.props.name} and I am {this.props.age} years old!</p>,
    //   <p>{this.props.children}</p>,
    //   <input type="text" onChange={this.props.changed} value={this.props.name}/>
    // ]

  }
}


export default Person;

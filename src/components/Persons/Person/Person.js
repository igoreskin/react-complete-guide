import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Auxil from '../../../hoc/Auxil';

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
      <Auxil>
        <p onClick={this.props.click}>I&apos;m {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </Auxil>
      // </div>
    )

    // return [
    //   <p onClick={this.props.click}>I&apos;m {this.props.name} and I am {this.props.age} years old!</p>,
    //   <p>{this.props.children}</p>,
    //   <input type="text" onChange={this.props.changed} value={this.props.name}/>
    // ]

  }
}


export default withClass(Person, classes.Person);

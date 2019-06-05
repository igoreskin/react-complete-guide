import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/WithClass';
import Auxil from '../../../hoc/Auxil';
import PropTypes from 'prop-types';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside constructor', props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  render() {
    console.log('[Person.js] Inside render()')
    return (
      // <div className={classes.Person}>
      <Auxil>
        <p onClick={this.props.click}>I&apos;m {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}/>
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

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
}

export default withClass(Person, classes.Person);

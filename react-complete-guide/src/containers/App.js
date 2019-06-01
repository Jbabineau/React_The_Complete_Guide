import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }
  state = {persons: [
            {id: '1', name: 'Max', age: 28},
            {id: '2', name: 'Manu', age: 29},
            {id: '3', name: 'Stephanie', age:26}
          ],
          otherState: 'some other value',
          showPersons: false,
          showCockpit: true,
          changeCounter: 0,
          isAuthenticated: false
  }

  /*static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }*/ 

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) =>  {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  loginHandler = () => {
    this.setState({ isAuthenticated: true });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  render () {
    console.log('[App.js] render');

    let persons = null;

    if(this.state.showPersons) {
      persons = (
      <div>
        <Persons 
          clicked={this.deletePersonHandler}
          changed= {this.nameChangedHandler}
          persons={this.state.persons}
        />
      </div> 
      );
    }

    return (
        <Aux classes={classes.App}>
          <button 
            onClick = {() => {this.setState({ showCockpit:false }) }}
            >
            Remove Cockpit 
          </button>
          <AuthContext.Provider 
            value={{
              authenticated: this.state.isAuthenticated,
              login: this.loginHandler
            }} >
            { this.state.showCockpit ? <Cockpit
              title={this.props.appTitle}
              personsLength={this.state.persons.length}
              showPersons={this.state.showPersons}
              clicked={this.togglePersonsHandler}
            /> : null }
            {persons}
          </AuthContext.Provider>

        </Aux>
    );
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  // This is an error because of legacy lifecycle
  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }
};

export default withClass(App, classes.App);
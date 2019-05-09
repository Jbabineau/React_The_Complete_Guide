import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person.js';
import ErrorBoundry from './ErrorBoundry/ErrorBoundry';


class App extends Component {
  /*const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age:26}
    ]
  });

  const [otherState, setOtherState ] = useState('some other state');

  const switchNameHandler = () => {
    setPersonsState({persons: [
      {name: 'Maximilian', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Steph', age:26}
    ]});
  };*/

  state = {persons: [
            {id: '1', name: 'Max', age: 28},
            {id: '2', name: 'Manu', age: 29},
            {id: '3', name: 'Stephanie', age:26}
          ],
          otherState: 'some other value',
          showPersons: false
  }

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

    this.setState( {
      persons: persons
    });
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  render () {
    let persons = null;
    let btnClass = '';

    if(this.state.showPersons) {
      persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <ErrorBoundry key={person.id}>
              <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
            </ErrorBoundry>
        })}
      </div> 
      );
      btnClass = classes.Red;
    }

    let classesList = [];
    if(this.state.persons.length <= 2) {
      classesList.push(classes.red);
    }

    if(this.state.persons.length <= 1) {
      classesList.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I'm a react app</h1>
          <p className={classesList.join(' ')}>This is really working!!!</p>
          <button 
          className = {btnClass}
            onClick={this.togglePersonsHandler}
          >Toggle Persons</button>
          {persons}
        </div>
    );
  }
};

export default App;
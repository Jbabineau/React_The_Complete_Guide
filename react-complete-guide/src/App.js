import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

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
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age:26}
          ],
          otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
      this.setState( {
        persons: [
          {name: newName, age: 28},
          {name: 'Manu', age: 29},
          {name: 'Steph', age:27}
        ]
      });
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: "Max", age: 28},
        {name: event.target.value, age: 29},
        {name: 'Steph', age:27}
      ]
    });
  }

  //console.log(personsState, otherState);

  render () {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!!!</p>
        <button 
          onClick={() => this.switchNameHandler('Maximilian!!')}
          style={buttonStyle}
        >Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
};

export default App;
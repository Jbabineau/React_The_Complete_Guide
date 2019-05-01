import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

const App = () => {

  const [userNameState, setUserNameState] = useState('SuperJamie');

  const inputChangedHandler = (event) => {
    setUserNameState(event.target.value);
  }

  return (
    <div className="App">
      <UserInput 
       onChange={inputChangedHandler}
       userName={userNameState}/>
      <UserOutput 
        userName = {userNameState}/>
      <UserOutput 
        userName = 'Melissa'/>
      <UserOutput 
        userName = {userNameState}/>
    </div>
  );
}

export default App;

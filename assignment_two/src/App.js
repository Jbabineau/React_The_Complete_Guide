import React, {useState} from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';


function App() {
  const [text, setTextState] = useState('');

  const inputValueHandler = (event) => {
    setTextState(event.target.value);
  }

  const deleteCharHandler = (index) => {
    const newText = text.split('');
    newText.splice(index, 1);
    setTextState(newText.join(''));
  }

  const charList = text.split('').map((ch, index) => {
    return <Char 
      character={ch} 
      key={index} 
      clicked={() => deleteCharHandler(index)}/>;
  });

  return (
    <div className="App">
      <input type="Text" onChange={(event) => inputValueHandler(event)}/>
      <p>{text}</p>
      <Validation 
        textLength={text.length}/>
      {charList}
    </div>
  );
}

export default App;

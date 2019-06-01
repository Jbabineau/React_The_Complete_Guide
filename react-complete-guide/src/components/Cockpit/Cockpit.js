import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = ( props ) => {
  const toggleButtonRef = useRef(null);
  const authContex = useContext(AuthContext);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect.');
    /*setTimeout(() => {
      alert('saved data to cloud.');
    }, 1000);*/
    toggleButtonRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect.')
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect.');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect.')
    };
  });

  let classesList = [];
  if(props.personsLength <= 2) {
    classesList.push(classes.red);
  }

  if(props.personsLength <= 1) {
    classesList.push(classes.bold);
  }

  let btnClass = '';

  if(props.showPersons) {
      btnClass = classes.Red;
  }

  return( 
      <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={classesList.join(' ')}>This is really working!!!</p>
          <button 
            ref={toggleButtonRef}
            className = {btnClass}
            onClick={props.clicked}>
            Toggle Persons
            </button>
              <button onClick={authContex.login}>
                Log in
              </button>
      </div>
  );
}

export default React.memo(Cockpit);
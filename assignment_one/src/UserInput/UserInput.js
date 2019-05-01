import React from 'react';
import { tsPropertySignature } from '@babel/types';

const UserInput = (props) => {
    return (<input type="Text" onChange={props.onChange} value={props.userName}/>)
  };
  
  export default UserInput;
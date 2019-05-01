import React from 'react';
import './UserOutput.css'

const UserOutput =(props) => {
    return (
      <div className="output">
        <p>
            UserName: {props.userName}
        </p>
        <p>
            Second Paragraph
        </p>
      </div>
    );
  };

  export default UserOutput;
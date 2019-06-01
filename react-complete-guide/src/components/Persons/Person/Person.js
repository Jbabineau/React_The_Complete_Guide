import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    /*static getDerivedStateFromProps(props, state){
        console.log('[Person.js] getDerivedStateFromProps');
        return state;
    }*/

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Person.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(){
        console.log('[Person.js] componentDidUpdate');

    }

    componentDidMount() {
        console.log('[Person.js] componentDidMount');
        console.log('context: ' + this.context.authenticated);
        console.log('context: login: ' + this.context.login)
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');

        return (
            <Aux>
                <AuthContext.Consumer>
                    {context => context.authenticated ? <p>Authenticated!</p> : <p>Please Login!</p>}
                </AuthContext.Consumer>
                
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    key="k1"
                    ref={this.inputElementRef}
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);
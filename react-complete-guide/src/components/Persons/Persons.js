import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    /*static getDerivedStateFromProps(props, state){
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }*/

    /*shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        if(nextProps.persons !== this.props.persons ||
            nextProps.clicked !== this.props.clicked ||
            nextProps.changed !== this.props.changed){
            return true;
        } else {
            return false;
        }
    }*/

    /*componentWillReceiveProps(props) {
        console.log('[Persons.js] componentWillReceiveProps', props);
    }*/

    /*componentWillUpdate() {
        console.log('[Persons.js] componentWillUpdate');
    }*/

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] componentDidUpdate');
        return { message: 'Snapshot!' };
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js rendering...');
        return ( this.props.persons.map((person, index) => {
                    return (
                        <Person 
                            click={() => this.props.clicked(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.props.changed(event, person.id)}/>
                    )
                })
        );
    }
}

export default Persons;
import React, { Component } from 'react';
import Aux from '../Aux';

import classes from './Layout.css';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({open: this.state.showSideDraw, showSideDrawer: false});
    }

    sideDrawerOpenHandler = () => {
        this.setState( ( prevState ) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render (props) {
        return (<Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerOpenHandler}/>
            <SideDrawer 
                open={this.state.showSideDrawer} 
                closed={this.sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>);
    }
};

export default Layout;
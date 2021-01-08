import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        mostrarSideDrawer: false
    }

    cerrarSideDrawerHandler = () => {
        this.setState({ mostrarSideDrawer: false });
    }

    toggleSideDrawerHandler = () => {
        const seMuestra = this.state.mostrarSideDrawer;
        this.setState({ mostrarSideDrawer: !seMuestra });
    }

    render() {
        return (
            <Aux>
                <Toolbar toggleSideDrawer={this.toggleSideDrawerHandler} />
                <SideDrawer open={this.state.mostrarSideDrawer} closed={this.cerrarSideDrawerHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    };

}

export default Layout;
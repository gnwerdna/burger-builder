import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    toggleSideDrawerHandler = () => {
        this.setState(prevState => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    } 
    render() {
        return (
            <Aux>
                <Toolbar click={this.toggleSideDrawerHandler}/>
                <SideDrawer 
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.showSideDrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;
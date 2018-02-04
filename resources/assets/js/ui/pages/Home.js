import React, {Component} from 'react';
import Dashboard from './Dashboard';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';

const mapStateToProps = (state) => {    
    return {
        loggedIn: state.user.loggedIn
    };
};

class Home extends Component {
    render() {  
        if (!this.props.loggedIn) {
            return (
                <Redirect to="/login" />
            );
        }
        
        return (
           <Dashboard />
        );
    }
}

export default connect(mapStateToProps)(Home);
import React, { Component } from 'react';
import userData from '../../data/user/initialize';
import initializeUser from '../../data/state/actions/user/initialize';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        loggedIn: state.user.loggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onInit: (data) => {
            dispatch(initializeUser(data))
        }
    };
};

class Callback extends Component {

    componentDidMount() {
        let data = userData();
        this.props.onInit(data);
    }

    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/" />;
        }

        return (
            <div className="fill-parent d-flex justify-content-center align-items-stretch">
                <div className="align-self-center">
                    Identificando usuario...
                </div>
            </div>
        );        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Callback);
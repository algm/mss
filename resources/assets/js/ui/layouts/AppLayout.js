import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch
} from 'react-router-dom'
import routes from '../../config/routes';
import { connect } from 'react-redux';
import userData from '../../data/user/initialize';
import initializeUser from '../../data/state/actions/user/initialize';

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onInit: (data) => {
            dispatch(initializeUser(data))
        }
    };
};

let initialized = false;

class AppLayout extends Component {
    async componentDidMount() {
        let data = userData();        
        this.props.onInit(data);
    }

    render() {
        return (
            <Router>
                <div className="fill-parent app-root">
                    {routes}
                </div>
            </Router>    
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
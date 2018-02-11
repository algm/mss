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
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink, concat } from 'apollo-link';
//import { ErrorLink } from "apollo-link-error";

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

const Routes = () => (
    <Router>
        <div className="fill-parent app-root">
            {routes}
        </div>
    </Router>    
);

const initApollo = () => {
    
    const httpLink = new HttpLink({
        uri: '/graphql',
    });

    /*const errorlink = new ErrorLink(({ response, operation }) => {
        console.log('me ejecuto', response, opration);
    });*/
    
    const authMiddleware = new ApolloLink((operation, forward) => {
        const user = userData();
        let token = null;

        if (user && user.token) {
            token = user.token;
        }

        // add the authorization to the headers
        operation.setContext({
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        return forward(operation);
    })

    return new ApolloClient({
        // By default, this client will send queries to the
        //  `/graphql` endpoint on the same host
        // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
        // to a different host
        link: concat(authMiddleware, httpLink/*, errorlink*/),
        cache: new InMemoryCache(),
    });
}

class AppLayout extends Component {
    componentWillMount() {
        this.client = initApollo();
        let data = userData();
        this.props.onInit(data);
    }

    componentWillUpdate() {
        this.client = initApollo();
    }

    render() {             
        return (
            <ApolloProvider client={this.client}>
                <Routes />
            </ApolloProvider>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
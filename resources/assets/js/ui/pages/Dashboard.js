import React from 'react';
import UserLayout from '../layouts/UserLayout';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Dashboard = ({data}) => {
    let content = <div>loading...</div>;
    
    if (!data.loading) {
        content = <div>{JSON.stringify(data)}</div>;
    }

    return (
        <UserLayout>
            {content}
        </UserLayout>
    );
};

export default graphql(gql`
  query HelloWorld {
    user {
        token
    }
  }
`)(Dashboard);
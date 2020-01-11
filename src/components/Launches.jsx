import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';


const LAUNCHES_QUERY = gql`
query LaunchesQuery {
    launches {
        flight_number
        mission_name
        launch_date_local
        launch_success
    }
}
`;

export default class Launches extends Component {
    render(){
        return (
            <>
            <div>
                <h1>Launches</h1>
                <Query query={LAUNCHES_QUERY}>
                    {({ loading, error , data }) => {
                        if(loading) return <h4> ... loading </h4>
                        if(error) return console.log(error)
                        console.log(data.launches[0].mission_name);
                        const nextLaunches = data.launches
                        return nextLaunches.map((launch) => (
                            <h2 key={launch.mission_name}>{ launch.mission_name }</h2>
                        ))
                    // return data.map(() => {

                     
                    }}
                </Query>
            </div>
            </>
        )
    }
}

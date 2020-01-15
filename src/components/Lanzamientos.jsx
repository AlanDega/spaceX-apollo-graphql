import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import Logo from '../assets/spacexlogo.png'
import './layout/misiones.css'


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



export default class Lanzamientos extends Component {
    render(){
        return (
            <>
                <div className="lanzamientos_query">
                    <h1>Lanzamientos</h1>

                        <Query query={LAUNCHES_QUERY} >
                                {({ loading, error , data }) => {
                                    if(loading) return <h4> ... loading </h4>
                                    if(error) return console.log(error)
                                    console.log(data.launches[0].mission_name);
                                    const nextLaunches = data.launches
                                    return nextLaunches.map((launch) => (
                                        <h3 key={launch.mission_name}>{ launch.mission_name }</h3>
                                    ))

                                    //first route of launch  if id is the same as call query with that info /platzi
                                }
                            }
                        </Query>
                </div>
                
            </>
        )
    }
}

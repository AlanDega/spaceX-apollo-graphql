import React from 'react';
import './App.css';
import logo from './assets/spacexlogo.png'
import  MissionsButton   from './components/MissionButton.jsx';
import  LaunchesButton   from './components/LaunchButton';
import  RocketsButton   from './components/RocketButton.jsx';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';

const client = new ApolloClient ({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    
    <ApolloProvider client={client}>
      <div className="App">
        <div>
          <img src={logo} alt="logo" className="space_logo" />
        </div>
        <Launches />
     </div>
    </ApolloProvider>
    
  
  );
}

export default App;

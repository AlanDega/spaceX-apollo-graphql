import React from 'react';
import logo from './assets/spacexlogo.png'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Lanzamientos from './components/Lanzamientos';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import Home  from './components/Home';




const client = new ApolloClient ({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route exact path="/lanzamientos" component={Lanzamientos} />
          <Route exact path="/misiones" component={Missions} />
          <Route exact path="/cohetes" component={Rockets} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

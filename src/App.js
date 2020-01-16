import React from 'react';
import logo from './assets/spacexlogo.png'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Launches from './components/Launches';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import Home  from './components/Home';






function App() {
  return (
    
      <BrowserRouter>
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route exact path="/lanzamientos" component={Launches} />
          <Route exact path="/misiones" component={Missions} />
          <Route exact path="/cohetes" component={Rockets} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;

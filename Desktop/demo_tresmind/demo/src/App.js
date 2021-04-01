import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import SearchAndResults from './screens/searchhandresults';
import GistDetails from './screens/gistdetails';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact={true} component={SearchAndResults} />
          <Route path="/:id" component={GistDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
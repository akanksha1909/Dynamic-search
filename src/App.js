import React, { Component } from 'react'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'


// Search
import RealDynamicSearch from './components/RealTimeSearch'





class App extends Component {
  render() {
    return (
        <Router history={browserHistory} >
            <Route path="/" component={RealDynamicSearch}> </Route>
        </Router>
    );
  }
}

export default App;
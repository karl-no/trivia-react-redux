import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Game from './pages/Game';
import Settings from './pages/Settings';
import Login from './pages/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={ Login }
          />
          <Route
            exact
            path="/game"
            component={ Game }
          />
          <Route
            exact
            path="/settings"
            component={ Settings }
          />
        </Switch>
      </div>
    );
  }
}

export default connect()(App);

import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import People from './People'
import Profile from './Profile'

const App = () => (
  <div>
    <Router>
      <main>
        <Switch>
          <Route exact path='/' component={People} />
          <Route path='/profile/:id' component={Profile} />
        </Switch>
      </main>
    </Router>
  </div>
)

export default App;

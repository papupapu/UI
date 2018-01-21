import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { routeCodes } from 'constants/routes';

import Home from './views/Home';
import Article from './views/Article';
import People from './views/People';
import NotFound from './views/NotFound';


class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={ routeCodes.HOME } component={ Home } />
        <Route path={ routeCodes.PEOPLE } component={ People } />
        <Route path={ routeCodes.ARTICLE } component={ Article } />
        <Route path='*' component={ NotFound } />
      </Switch>
    );
  }
}

export default hot(module)(Routes);

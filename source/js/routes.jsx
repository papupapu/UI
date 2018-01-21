import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { routeCodes } from 'constants/routes';

import Home from './views/Home';
import ArticleApp from './containers/ArticleApp';
import People from './views/People';
import NotFound from './views/NotFound';


class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={ routeCodes.HOME } component={ Home } />
        <Route path={ routeCodes.PEOPLE } component={ People } />
        <Route path={ routeCodes.SURF } component={ Home } />
        <Route path={ routeCodes.ARTICLE } component={ ArticleApp } />
        <Route path='*' component={ NotFound } />
      </Switch>
    );
  }
}

export default hot(module)(Routes);

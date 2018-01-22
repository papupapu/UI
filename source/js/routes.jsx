import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { routeCodes, categoryRoutesCodes } from 'constants/routes';

import Home from './views/Home';
import ArticleApp from './containers/ArticleApp';
import NotFound from './views/NotFound';

const categoriesRouteList = () => {
  const list = [];
  Object.keys(categoryRoutesCodes).forEach(
    (el) => {
      list.push(
        <Route
          key={ `route-${ el }` }
          exact
          path={ `${ categoryRoutesCodes[el] }` }
          component={ Home }
        />
      );
    }
  );
  return list;
};
const categoryRoutes = categoriesRouteList();

class Routes extends Component {
  render() {
    return (
      <Switch>
        { categoryRoutes }
        <Route path={ routeCodes.ARTICLE } component={ ArticleApp } />
        <Route path='*' component={ NotFound } />
      </Switch>
    );
  }
}

export default hot(module)(Routes);

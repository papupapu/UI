import React from 'react';
import { NavLink } from 'react-router-dom';

import * as settings from '../../../../constants/sitesettings';

const Nav = () => {
  return (
    <div id='nav'>
      <h1>{settings.SITENAME}</h1>
      <h2>{settings.SITEDESCRIPTION}</h2>
      <nav>
        <ul>
          {
            settings.CATEGORIES.map(
              category => (
                <li key={ `nav-link-${ category.slug }` }>
                  <NavLink
                    activeClassName='nav-link-active'
                    className=''
                    exact
                    to={ `${ settings.PUBLICPATH }${ category.path }` }
                    title={ category.label }
                  >
                    { category.label }
                  </NavLink>
                </li>
              )
            )
          }
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

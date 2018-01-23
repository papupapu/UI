import React from 'react';
import { NavLink } from 'react-router-dom';

import * as settings from '../../../../constants/sitesettings';

const makeBreadcrumb = (match) => {
  const links = [];
  if ('params' in match && Object.keys(match.params).length > 0) {
    if ('category' in match.params && 'section' in match.params) {
      const category = settings.CATEGORIES.filter(el => el.path === match.params.category);
      links.push(
        <li key='breadcrumb-category' className='category'>
          <NavLink
            activeClassName=''
            className=''
            exact
            to={ `${ settings.PUBLICPATH }${ category[0].path }` }
            title={ category[0].label }
          >
            { category[0].label }
          </NavLink>
        </li>
      );
      links.push(<li key='breadcrumb-section'><a href='/' title='Section'>Section</a></li>);
    } else if ('category' in match.params) {
      const category = settings.CATEGORIES.filter(el => el.path === match.params.category);
      links.push(
        <li key='breadcrumb-category'>
          <NavLink
            activeClassName=''
            className=''
            exact
            to={ `${ settings.PUBLICPATH }${ category[0].path }` }
            title={ category[0].label }
          >
            { category[0].label }
          </NavLink>
        </li>
      );
    }
  } else if (match.path !== '/') {
    const category = settings.CATEGORIES.filter(el => el.path === match.path.replace('/', ''));
    links.push(
      <li key='breadcrumb-category'>
        <NavLink
          activeClassName=''
          className=''
          exact
          to={ `${ settings.PUBLICPATH }${ category[0].path }` }
          title={ category[0].label }
        >
          { category[0].label }
        </NavLink>
      </li>
    );
  }
  return links;
};

const Header = (
  {
    match,
    toggleSiteNavigation,
  }
) => {
  const breadcrumb = makeBreadcrumb(match);
  return (
    <header id='header'>
      <nav>
        <ul>
          <li>
            <NavLink
              activeClassName=''
              className=''
              exact
              to={ settings.PUBLICPATH }
              title={ settings.SITENAME }
            >
              { settings.SITENAME }
            </NavLink>
          </li>
          { breadcrumb }
        </ul>
      </nav>
      <a
        href='/'
        title='Topics'
        className='menu_handle topics'
        onClick={ (e) => { e.preventDefault(); toggleSiteNavigation(e); } }
      >
        Topics
      </a>
    </header>
  );
};

export default Header;

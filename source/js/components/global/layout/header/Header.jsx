import React from 'react';

const Header = () => {
  return (
    <header id='header'>
      <nav>
        <ul>
          <li><a href='/' title='Sitename'>Sitename</a></li>
          <li className='category'><a href='/' title='Category'>Category</a></li>
          <li><a href='/' title='Section'>Section</a></li>
        </ul>
      </nav>
      <a href='/' title='Topics' className='topics'>Topics</a>
    </header>
  );
};

export default Header;

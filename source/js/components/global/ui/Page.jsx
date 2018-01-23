import React from 'react';

import Header from '../layout/header/Header';
import Utils from '../layout/header/Utils';
import Nav from '../layout/header/Nav';
import Footer from '../layout/footer/Footer';

const Page = (
  {
    children,
    isFullpage,
    match,
    toggleSiteHiddenComponents,
  }
) => {
  let code;
  if (isFullpage) {
    code = (
      <div className='wrap'>
        { children }
      </div>
    );
  } else {
    code = (
      <div className='app'>
        <div className='wrap'>
          <Header
            match={ match }
            toggleSiteNavigation={ toggleSiteHiddenComponents }
          />
          { children }
          <Utils
            toggleSiteNavigation={ toggleSiteHiddenComponents }
          />
          <Footer />
        </div>
        <Nav
          match={ match }
        />
      </div>
    );
  }
  return code;
};

export default Page;

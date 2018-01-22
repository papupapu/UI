import React from 'react';

import Header from '../layout/header/Header';
import Utils from '../layout/header/Utils';
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
    );
  }
  return code;
};

export default Page;

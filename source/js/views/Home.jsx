import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment } from 'actions/app';

import UIHandler from '../components/global/ui/UIHandler';
import Page from '../components/global/ui/Page';

@connect(state => ({
  counter: state.app.get('counter'),
}))

class Home extends Component {
  static propTypes = {
    // counter: PropTypes.number,
    // from react-redux connect
    toggleSiteHiddenComponents: PropTypes.func,
    dispatch: PropTypes.func,
  }

  handleTestButtonClick = () => {
    const { dispatch } = this.props;

    dispatch(increment());
  }

  render() {
    const {
      // counter,
      match,
      toggleSiteHiddenComponents,
    } = this.props;
    
    return (
      <Page
        isFullpage={ false }
        toggleSiteHiddenComponents={ toggleSiteHiddenComponents }
        match={ match }
      >
        <div className='content'>
          <article className='detail'>
            {match.url}
            <a href='/aaa/aaa' title='suca'>aaa</a>
          </article>
        </div>
      </Page>
    );
  }
}

export default UIHandler(Home);

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UIHandler from '../components/global/ui/UIHandler';
import Page from '../components/global/ui/Page';

import Social from '../components/global/layout/article/Social';
import DateAuthor from '../components/global/layout/article/DateAuthor';
import Related from '../components/global/layout/article/Related';
import Picture from '../components/global/layout/picture/Picture';

class Article extends Component {
  static propTypes = {
    mess: PropTypes.string, // to remove
    error: PropTypes.string,
    loading: PropTypes.bool,
    news: PropTypes.object,
    match: PropTypes.object,
    toggleSiteHiddenComponents: PropTypes.func,
    getNews: PropTypes.func,
  }

  componentWillMount() {
    const {
      news,
      match,
      getNews,
    } = this.props;
    if (!news) {
      getNews(match.params.category);
    }
    try {
      if (document && document.body.classList.contains('menu_open')) {
        document.body.classList.remove('menu_open');
      }
    } catch (e) {
      console.warn('Home - componentWillMount');
      console.warn(e);
    }
  }

  render() {
    const {
      mess, // to remove
      loading,
      error,
      match,
      toggleSiteHiddenComponents,
    } = this.props;
    console.log(mess); // to remove
    return (
      <Page
        isFullpage={ false }
        toggleSiteHiddenComponents={ toggleSiteHiddenComponents }
        match={ match }
      >
        { loading && <div>Loading people...</div> }
        { error && error.toString() }
        <div className='content'>
          <article className='detail'>
            <div className='article'>
              <header>
                <h1>Why Namibia Represents What Surf Travel Should Be About</h1>
                <h2>Back when The Endless Summer came out, surf travel wasn't really a thing. Not in the way it is now, at least. Then Bruce Brown's opus was released to the masses, and the trickle of surfers curious to seek, to explore, to find, slowly became a flood. Now, of course, you're hard pressed to find a lineup that hasn't been explored. Oh, there are places, to be sure, but they're fewer and farther between with each passing day.</h2>
              </header>
              <p>Namibia, though, represents something: despite the fact that it has indeed been found by the wandering surfer, there’s something about it so… foreign. Parts of it harbor an alien landscape, barren and windswept, mainly untouched by the destructive hand of man. A surf trip to Namibia isn’t easy–if you do it right, that is. It’s not Bali or Hawaii with their swaying palms and colorful drinks. You can’t step off a plane and into a perfect wave. You’ve got to earn it. That (and the endlessly perfect tubes that are churned out there), coupled with the fact that it’s not a place most surfers will go in their lifetimes, makes each and every edit a dream about a time every surfer yearns for.</p>
              <h3>Namibia Surf Guide</h3>
              <p>Epic surf videos from Namibia have been spread on the internet. And that make many rippers search for some of the long lefts just here.</p>
              <p>Namibia is one of the youngest nations in Africa and it is situated between the Kalahari Desert and the roaring Atlantic Ocean.</p>
              <p>Even though a lot of the surfing potential already has been mapped in Namibia and you might even be eble buy some surfing equipment in Swakopmund this does not mean that many surfers go here – on the contrary. Just buckle up for your next brig surf adventure.</p>
              <div className='gallery'>
                <Picture
                  cssClassName='one'
                  imgSrc='http://res.cloudinary.com/dia4050i1/image/upload/v1491748513/surf/345x259/surf2.jpg'
                  imgAlt='surf'
                  srcSetList={ [
                    {
                      imgSrc: 'http://res.cloudinary.com/dia4050i1/image/upload/v1491748513/surf/345x259/surf2.jpg',
                      mediaQuery: '(max-width: 413px)',
                    },
                    {
                      imgSrc: 'http://res.cloudinary.com/dia4050i1/image/upload/v1491748513/surf/768x577/surf2.jpg',
                      mediaQuery: '(max-width: 3000px)',
                    },
                  ] }
                />
                <picture className='two'>
                  <source
                    srcSet='http://res.cloudinary.com/dia4050i1/image/upload/v1491748513/surf/345x259/surf3.jpg'
                    media='(max-width: 413px)'
                  />
                  <source
                    srcSet='http://res.cloudinary.com/dia4050i1/image/upload/v1491748513/surf/345x259/surf3.jpg'
                    media='(max-width: 3000px)'
                  />
                  <img
                    src='http://res.cloudinary.com/dia4050i1/image/upload/v1491748513/surf/345x259/surf3.jpg'
                    alt='surf'
                  />
                </picture>
                <picture className='three'>
                  <source
                    srcSet='http://res.cloudinary.com/dia4050i1/image/upload/v1491748513/surf/345x259/surf3.jpg'
                    media='(max-width: 413px)'
                  />
                  <source
                    srcSet='http://res.cloudinary.com/dia4050i1/image/upload/v1491748513/surf/345x259/surf3.jpg'
                    media='(max-width: 3000px)'
                  />
                  <img
                    src='http://res.cloudinary.com/dia4050i1/image/upload/v1491748513/surf/345x259/surf3.jpg'
                    alt='surf'
                  />
                </picture>
              </div>
              <h3>Hardcover edition specs</h3>
              <ul>
                <li><span>Author:</span> Jon Krakauer</li>
                <li><span>Genre:</span> Non-fiction</li>
                <li><span>Page:</span> 416pp.</li>
                <li><span>Publication date:</span> 1997</li>
              </ul>
              <p>
                Even though a lot of the surfing potential already has been mapped in Namibia and you might even be eble buy some surfing equipment in Swakopmund this does not mean that many surfers go here – on the contrary. Just buckle up for your next brig surf adventure.
              </p>
              <Social />
              <DateAuthor />
              <Related />
            </div>
            <Picture
              imgSrc='http://papu.cloudno.de/img/345x259.jpg'
              imgAlt='surf'
              srcSetList={
                [
                  {
                    imgSrc: 'http://papu.cloudno.de/img/768x577.jpg',
                    mediaQuery: '(max-width: 950px)',
                  },
                  {
                    imgSrc: 'http://papu.cloudno.de/img/1000x751.jpg',
                    mediaQuery: '(max-width: 1200px)',
                  },
                  {
                    imgSrc: 'http://papu.cloudno.de/img/1684x1000.jpg',
                    mediaQuery: '(max-width: 5000px)',
                  },
                ]
              }
            />
          </article>
        </div>
      </Page>
    );
  }
}

export default UIHandler(Article);

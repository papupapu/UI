import { connect } from 'react-redux';

import { getNews } from 'actions/news';

import Article from '../views/Article';

const mapStateToProps = (state, { match }) => {
  /*
  const {
    postsByCategory,
  } = state;

  const category = match.params.category;
  const postId = match.params.id;
  let post = {};
  let categoryPosts = [];
  if (
    postsByCategory[category] !== undefined &&
    postsByCategory[category].items &&
    postsByCategory[category].items.length > 0
  ) {
    post = postsByCategory[category].items.filter(el => el.id === postId)[0];
    categoryPosts = postsByCategory[category].items.filter(el => el.id !== postId);
  }
  const notFound = post === undefined;
  const shouldFetch = !notFound && Object.keys(post).length === 0;
  
  return {
    shouldFetch,
    category,
    postId,
    post,
    categoryPosts,
    notFound,
  };
  */
  return {
    mess: 'mind your business, plz', // to remove
    error: state.news.get('error'),
    loading: state.news.get('loading'),
    news: state.news.get('news'),
    match,
  };
};

const mapDispatchToProps = dispatch => ({
  getNews: (category) => {
    dispatch(getNews(category));
  },
});

const ArticleApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);

export default ArticleApp;

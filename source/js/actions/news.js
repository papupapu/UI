export const GET_NEWS_START = 'GET_NEWS_START';
export const GET_NEWS_ERROR = 'GET_NEWS_ERROR';
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';


export function getNews(category) {
  return {
    type: GET_NEWS_START,
    category,
  };
}

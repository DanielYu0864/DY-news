import axios from 'axios';
import { Dispatch } from 'redux';
import { NewsListAction } from '../constants/newsConstants';
import { NewsActionType } from '../api/newsapiActionType';

export const listNews =
  (country: any = 'us') =>
  async (dispatch: Dispatch<NewsActionType>) => {
    try {
      dispatch({ type: NewsListAction.NEWS_LIST_REQUEST });
      //* get api key from .env
      const dyApiKey: string = process.env.REACT_APP_DY_API as string;
      const { data: topHeadlines } = await axios.get(
        `https://dy-news-api.herokuapp.com/api/key=${dyApiKey}/news/${country}`
      );

      const { articles } = topHeadlines;

      dispatch({
        type: NewsListAction.NEWS_LIST_REQUEST_SUCCESS,
        payload: articles,
      });
    } catch (error) {
      dispatch({
        type: NewsListAction.NEWS_LIST_REQUEST_FAIL,
        payload: error.message,
      });
    }
  };

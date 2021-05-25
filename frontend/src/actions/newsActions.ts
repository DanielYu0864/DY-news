import axios from 'axios';
import { Dispatch } from 'redux';
import { NewsListAction } from '../constants/newsConstants';
import { news_data } from '../data';
import NewsAPI from 'ts-newsapi';

interface NewsListRequest {
  type: NewsListAction.NEWS_LIST_REQUEST;
}
interface NewsListRequestSuccess {
  type: NewsListAction.NEWS_LIST_REQUEST_SUCCESS;
  payload: any;
}
interface NewsListRequestFail {
  type: NewsListAction.NEWS_LIST_REQUEST_FAIL;
  payload: string;
}

export type Action =
  | NewsListRequest
  | NewsListRequestSuccess
  | NewsListRequestFail;

interface ProcessEnv {
  NODE_ENV: 'development' | 'production' | 'test';
  REACT_APP_NEWS_API: string;
}

export const listNews = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({ type: NewsListAction.NEWS_LIST_REQUEST });
    //* get api key from .env
    const apiKey: string = process.env.REACT_APP_NEWS_API as string;
    const newsAPI = new NewsAPI(apiKey);

    const topHeadlines = await newsAPI.getTopHeadlines({
      country: 'us',
      category: 'business',
      pageSize: 40,
      page: 1,
    });

    console.log(topHeadlines);
    const { articles } = topHeadlines;

    // console.log(articles);

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

import axios from 'axios';
import { Dispatch } from 'redux';
import { NewsListAction } from '../constants/newsConstants';
import { news_data } from '../data';

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

export const listNews = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({ type: NewsListAction.NEWS_LIST_REQUEST });

    const { articles } = news_data;

    console.log(articles);

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

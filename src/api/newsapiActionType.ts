import { NewsListAction, NewsCategoryAction } from '../constants/newsConstants';

interface NewsListRequest {
  type: NewsListAction.NEWS_LIST_REQUEST;
}
interface NewsListRequestSuccess {
  type: NewsListAction.NEWS_LIST_REQUEST_SUCCESS;
  payload: any;
}
interface NewsListRequestFail {
  type: NewsListAction.NEWS_LIST_REQUEST_FAIL;
  payload: any;
}

export type NewsActionType =
  | NewsListRequest
  | NewsListRequestSuccess
  | NewsListRequestFail;

interface NewsCategoryRequest {
  type: NewsCategoryAction.NEWS_CATEGORY_REQUEST;
}
interface NewsCategoryRequestSuccess {
  type: NewsCategoryAction.NEWS_CATEGORY_REQUEST_SUCCESS;
  payload: any;
}
interface NewsCategoryRequestFail {
  type: NewsCategoryAction.NEWS_CATEGORY_REQUEST_FAIL;
  payload: any;
}

export type NewsCategoryActionType =
  | NewsCategoryRequest
  | NewsCategoryRequestSuccess
  | NewsCategoryRequestFail;

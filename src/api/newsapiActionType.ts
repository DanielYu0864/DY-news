import { NewsListAction } from '../constants/newsConstants';

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

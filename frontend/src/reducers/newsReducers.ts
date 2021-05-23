import { NewsListAction } from '../constants/newsConstants';
import { Action } from '../actions/newsActions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// set up initail state when first in page
const initialState = {
  loading: false,
  error: null,
  data: [],
};

export const newsReducer = (
  state: RepositoriesState = initialState,
  action: Action
) => {
  switch (action.type) {
    case NewsListAction.NEWS_LIST_REQUEST:
      return { loading: true, error: null, data: [] };
    case NewsListAction.NEWS_LIST_REQUEST_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case NewsListAction.NEWS_LIST_REQUEST_FAIL:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

import { NewsCategoryAction } from '../constants/newsConstants';
import { NewsCategoryActionType } from '../api/newsapiActionType';

interface NewsCategoryState {
  loading: boolean;
  error: string | null;
  data: string;
}

const initialState: NewsCategoryState = {
  loading: false,
  error: null,
  data: 'general',
};
export const newsCategoryReducer = (
  state = initialState,
  action: NewsCategoryActionType
) => {
  switch (action.type) {
    case NewsCategoryAction.NEWS_CATEGORY_REQUEST:
      return { loading: true, error: null, data: '' };
    case NewsCategoryAction.NEWS_CATEGORY_REQUEST_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case NewsCategoryAction.NEWS_CATEGORY_REQUEST_FAIL:
      return { loading: false, error: action.payload, data: '' };
    default:
      return state;
  }
};

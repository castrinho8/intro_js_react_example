import _ from 'lodash';

import { REMOVE_ITEM, RESET_LIST, UPDATE_LIST,
  } from '../constants/simpson-list-actions-constants';
import simpsonList from '../constants/simpsonList';

const initialState = {
  items: simpsonList,
}

export default function simpsonListReducer(state = initialState, action) {

  switch (action.type) {
    case UPDATE_LIST:
      return {
        items: action.items,
      };
    case REMOVE_ITEM:
      return {
        items: _.filter(state.items, (item) => item.id !== action.id),
      };
    case RESET_LIST:
      return initialState;
    default:
      return state;
  }
}

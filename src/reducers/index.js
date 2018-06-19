import { combineReducers } from 'redux';
import simpsonListReducer from './simpson-list-reducer';
import simpsonCreateOrEditReducer from './simpson-create-or-edit-reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  simpsonListReducer,
  simpsonCreateOrEditReducer,
  routing: routerReducer
});

export default rootReducer;

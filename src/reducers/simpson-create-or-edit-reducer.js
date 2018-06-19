import _ from 'lodash';

import { INITIALIZE_FORM, UPDATE_FIELD, VALIDATE_FIELD_FAILED,
  VALIDATE_FIELD_SUCCESS, RESET_FORM,
} from '../constants/simpson-create-or-edit-actions-constants';

const initialState = {
  id: null,
  name: '',
  famousStatement: '',
  url: '',
  errors: {},
}

export default function simpsonCreateOrEditReducer(state = initialState, action) {

  switch (action.type) {
    case INITIALIZE_FORM:
      const { character } = action;
      return {
        id: character.id,
        name: character.name,
        famousStatement: character.famousStatement,
        url: character.url,
      };
    case UPDATE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case VALIDATE_FIELD_SUCCESS:
      return {
        ...state,
        errors: _.omit(state.errors, action.name),
      };
    case VALIDATE_FIELD_FAILED:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.name]: action.error,
        }
      };
    case RESET_FORM:
      return initialState;
    default:
      return state;
  }
}

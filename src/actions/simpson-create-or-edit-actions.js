import { push } from 'react-router-redux';
import { INITIALIZE_FORM, UPDATE_FIELD, VALIDATE_FIELD_SUCCESS,
  VALIDATE_FIELD_FAILED, RESET_FORM,
} from '../constants/simpson-create-or-edit-actions-constants';
import SimpsonListActions from '../actions/simpson-list-actions';

export function initialize(character) {
  return function (dispatch) {
    return dispatch({
      type: INITIALIZE_FORM,
      character,
    });
  };
}

export function updateField(name, value) {
  return function (dispatch) {
    return dispatch({
      type: UPDATE_FIELD,
      name,
      value,
    });
  };
}

export function validateField(name) {
  return function (dispatch, getState) {
    const value = getState().simpsonCreateOrEditReducer[name];
    if (value) {
      return dispatch({
        type: VALIDATE_FIELD_SUCCESS,
        name,
      });
    }
    return dispatch({
      type: VALIDATE_FIELD_FAILED,
      name,
      error: `${name} field is mandatory`,
    });
  };
}

export function saveCharacter() {
  return function (dispatch, getState) {
    const character = getState().simpsonCreateOrEditReducer;
    dispatch(SimpsonListActions.saveCharacter(character));
    dispatch(push('/character'));
  };
}

export function resetForm() {
  return {
    type: RESET_FORM,
  };
}

export default {
  initialize,
  updateField,
  validateField,
  saveCharacter,
  resetForm,
}

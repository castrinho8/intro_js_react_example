import { UPDATE_LIST, REMOVE_ITEM, RESET_LIST } from '../constants/simpson-list-actions-constants';

export function removeItem(id) {
  return function (dispatch) {
    return dispatch({
      type: REMOVE_ITEM,
      id,
    });
  };
}

export function saveCharacter(character) {
  return function (dispatch, getState) {
    const items = getState().simpsonListReducer.items;
    const newCharacter = { ...character };
    const newList = _.cloneDeep(items);
    if (_.isNil(character.id)) {
      const max = _.maxBy(items, (it) => it.id)
      newCharacter.id = max ? max.id + 1 : 0;
      newList.push(newCharacter);
    } else {
      const index = _.findIndex(items, (item) => item.id === character.id);
      newList[index] = newCharacter;
    }
    return dispatch({
      type: UPDATE_LIST,
      items: newList,
    });
  };
}

export function resetList() {
  return {
    type: RESET_LIST,
  };
}

export default {
  removeItem,
  saveCharacter,
  resetList,
}

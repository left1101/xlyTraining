import * as ActionTypes from '../const/index'

function showDialog(state = {
  handleItemIndex: null,
  showMultipleSelect: null,
}, action) {
  switch (action.type) {
    case ActionTypes.SET_CHAT_MESSAGE_SELECT_IDX:
      return { ...state,
        handleItemIndex: action.idx,
      }
    case ActionTypes.SET_CHAT_MULTIPLE_SELECT:
      return { ...state,
        showMultipleSelect: action.messages,
      }
    default:
      return state
  }
}

export default showDialog
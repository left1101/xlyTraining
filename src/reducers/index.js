import * as ActionTypes from '../const/index'
import icon from '../resource/icon_Good_B-2.png';

function index(state = {
  messages: [{
    icon: icon,
    title: '小年糕',
    descript: 'hello 小年糕',
    time: '7-18 11:14',
    isToTop: false,
  }, {
    icon: icon,
    title: '小板凳',
    descript: 'hello 小板凳',
    time: '7-18 11:15',
    isToTop: false,
  }, {
    icon: icon,
    title: '小豆包',
    descript: 'hi 小豆包',
    time: '7-17 10:00',
    isToTop: false,
  }],
  handleItemIndex: null,
  showMultipleSelect: null,
}, action) {
  switch (action.type) {
    case ActionTypes.SET_CHAT_MESSAGES:
      return { ...state,
        messages: action.messages,
        showMultipleSelect: null,
      }
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

export default index
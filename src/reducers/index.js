import { combineReducers } from 'redux'
import message from './message';
import showDialog from './showDialog';

const index = combineReducers({
  message,
  showDialog
})

export default index
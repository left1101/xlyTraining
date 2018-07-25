import * as ActionTypes from '../const/index'

export const acSetChatMessages = messages => ({
  type: ActionTypes.SET_CHAT_MESSAGES,
  messages,
})

export const setChatSelectIdx = idx => ({
  type: ActionTypes.SET_CHAT_MESSAGE_SELECT_IDX,
  idx,
})

export const setChatMultipleSelect = messages => ({
  type: ActionTypes.SET_CHAT_MULTIPLE_SELECT,
  messages,
})
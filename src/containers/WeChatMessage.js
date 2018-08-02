import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MessageItemView from '../components/MessageItem.js';
import DialogView from '../components/DialogView.js';
import NavBar from '../components/NavBar';
import ChatNav from '../components/ChatNav';
import { DIALOG_SHOW_STATUS } from '../const';
import './WeChatMessage.css';
import * as messageActionsCreators from '../actions/index'
import icon from '../resource/icon_Good_B-2.png';

class WeChatMessage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
    }
  }

  onItemClick = (message) => {
    console.log(message);
  }

  handleItemMoreClick = (index) => {
    const { messageActions } = this.props
    messageActions.setChatSelectIdx(index)
    this.setState({
      isDialogActive: DIALOG_SHOW_STATUS.SHOW_MORE_BTN,
    })
  }

  handleDeleteItem = () => {
    const { messages, handleItemIndex, messageActions } = this.props
    const messageTmp = messages.slice()
    messageTmp.splice(handleItemIndex, 1)
    messageActions.acSetChatMessages(messageTmp)
    this.setState({
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
    })
  }

  handleMultipleClick = () => {
    const { handleItemIndex, messageActions } = this.props
    messageActions.setChatMultipleSelect([handleItemIndex])
    this.setState({
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
    })
  }

  handleSelectItem = index => {
    const { showMultipleSelect, messageActions } = this.props
    const showMultipleSelectTmp = showMultipleSelect.slice()
    const idx = showMultipleSelectTmp.findIndex(item => item === index)
    if (idx >= 0) {
      showMultipleSelectTmp.splice(idx, 1)
    } else {
      showMultipleSelectTmp.push(index)
    }
    messageActions.setChatMultipleSelect(showMultipleSelectTmp)
  }

  handleDeleteMultiple = () => {
    const { showMultipleSelect, messages, messageActions } = this.props
    const messagesTmp = messages.slice()
    let showMultipleSelectTmp = showMultipleSelect.slice()
    showMultipleSelectTmp = showMultipleSelectTmp.sort((a, b) => b - a)
    showMultipleSelectTmp.forEach(item => {
      messagesTmp.splice(item, 1)
    })
    messageActions.acSetChatMessages(messagesTmp)
  }

  handleSetToTop = () => {
    const { handleItemIndex, messages, messageActions } = this.props
    const messageTmp = messages.slice()
    const message = messageTmp.splice(handleItemIndex, 1)
    messageTmp.unshift({
      ...message.pop(),
      isToTop: true,
    })
    messageActions.acSetChatMessages(messageTmp)
    this.setState({
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
    })
  }

  handleShowAddViewClick = () => {
    this.setState({
      isDialogActive: DIALOG_SHOW_STATUS.SHOW_ADD_MESSAGE,
    })
  };

  handleAddItem = item => {
    const { messages, messageActions } = this.props;
    const newMessages = messages.slice();
    let firstNotTopIdx = -1;
    newMessages.forEach((item, idx) => {
      if (item.isToTop) {
        firstNotTopIdx = idx
      }
    });
    newMessages.splice(firstNotTopIdx + 1, 0, {
      icon: icon,
      isToTop: false,
      ...item,
    });
    messageActions.acSetChatMessages(newMessages)
    this.setState({
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
    });
  }

  handleShowDialog = isActive => {
    this.setState({ isDialogActive: isActive });
  }

  renderMessageList = () => {
    const { messages, showMultipleSelect } = this.props
    return messages.map((item,i) => {
      return <MessageItemView
        key={i}
        item={item}
        index={i}
        onClick={this.onItemClick}
        onItemMoreClick={this.handleItemMoreClick}
        showMultipleSelect={showMultipleSelect}
        onSelectItem={this.handleSelectItem}
      />
    });
  }

  renderMultipleDeleteBtn() {
    const { showMultipleSelect } = this.props
    if (!Array.isArray(showMultipleSelect)) {
      return null
    }
    return (
      <div>
        <div className="multipleDeleteBtn" onClick={this.handleDeleteMultiple}>删除</div>
      </div>
    )
  }

  render() {
    const { isDialogActive } = this.state
    return (
      <div>
        <NavBar onShowAddViewClick={this.handleShowAddViewClick} />
        {this.renderMessageList()}
        {this.renderMultipleDeleteBtn()}
        <ChatNav />
        <DialogView
          isActive={isDialogActive}
          onCloseClick={this.handleShowDialog}
          handleAddItem={this.handleAddItem}
          handleDeleteItem={this.handleDeleteItem}
          handleSetToTop={this.handleSetToTop}
          handleMultipleClick={this.handleMultipleClick}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { message, showDialog } = state
  return {
    ...message,
    ...showDialog,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    messageActions: bindActionCreators(messageActionsCreators, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeChatMessage);

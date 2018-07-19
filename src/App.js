import React from 'react';
import MessageItemView from './components/MessageItem.js';
import DialogView from './components/DialogView.js';
import NavBar from './components/NavBar';
import { DIALOG_SHOW_STATUS } from './const';
import './App.css';

// const icon = require('./resource/icon_Good_B-2.png');

import icon from './resource/icon_Good_B-2.png';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      messages: [
        {
          icon: icon,
          title: '小年糕',
          descript: 'hello 小年糕',
          time: '7-18 11:14'
        },
        {
          icon: icon,
          title: '小板凳',
          descript: 'hello 小板凳',
          time: '7-18 11:15',
        },
        {
          icon: icon,
          title: '小豆包',
          descript: 'hi 小豆包',
          time: '7-17 10:00',
        }
      ],
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
      handleItemIndex: null,
      showMultipleSelect: null,
    }
  }

  onItemClick = (message) => {
    console.log(message);
  }

  handleItemMoreClick = (index) => {
    this.setState({
      isDialogActive: DIALOG_SHOW_STATUS.SHOW_MORE_BTN,
      handleItemIndex: index,
    })
  }

  handleDeleteItem = () => {
    const { handleItemIndex, messages } = this.state
    const messageTmp = messages.slice()
    messageTmp.splice(handleItemIndex, 1)
    this.setState({
      messages: messageTmp,
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
    })
  }

  handleMultipleClick = () => {
    const { handleItemIndex } = this.state
    this.setState({
      showMultipleSelect: [handleItemIndex],
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
    })
  }

  handleSelectItem = index => {
    const { showMultipleSelect } = this.state
    const showMultipleSelectTmp = showMultipleSelect.slice()
    const idx = showMultipleSelectTmp.findIndex(item => item === index)
    if (idx >= 0) {
      showMultipleSelectTmp.splice(idx, 1)
    } else {
      showMultipleSelectTmp.push(index)
    }
    this.setState({
      showMultipleSelect: showMultipleSelectTmp,
    })
  }

  handleDeleteMultiple = () => {
    const { showMultipleSelect, messages } = this.state
    const messagesTmp = messages.slice()
    showMultipleSelect.forEach(item => {
      messagesTmp.splice(item, 1)
    })
    this.setState({
      messages: messagesTmp,
      showMultipleSelect: null,
    })
  }

  handleSetToTop = () => {
    const { handleItemIndex, messages } = this.state
    const messageTmp = messages.slice()
    const message = messageTmp.splice(handleItemIndex, 1)
    messageTmp.unshift(message.pop())
    this.setState({
      messages: messageTmp,
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
    })
  }

  handleShowAddViewClick = () => {
    this.setState({
      isDialogActive: DIALOG_SHOW_STATUS.SHOW_ADD_MESSAGE,
    })
  }

  handleAddItem = item => {
    const newMessages = this.state.messages.slice();
    newMessages.unshift({
      icon: icon,
      ...item,
    });
    this.setState({
      messages: newMessages,
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
    });
  }

  handleShowDialog = isActive => {
    this.setState({ isDialogActive: isActive });
  }

  renderMessageList = () => {
    const { showMultipleSelect } = this.state
    const messageViews = this.state.messages.map((item,i) => {
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
    return messageViews;
  }

  renderMultipleDeleteBtn() {
    const { showMultipleSelect } = this.state
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
    return (
      <div>
        <NavBar onShowAddViewClick={this.handleShowAddViewClick} />
        { this.renderMessageList() }
        {this.renderMultipleDeleteBtn()}
        <nav className="chat-nav">
          <div className="chat-nav__item" onClick={this.handleAddItem}>
            <img className="chat-nav__item__icon" src={icon} alt="" />
            <div className="chat-nav__item__name">微信</div>
          </div>
          <div className="chat-nav__item">
            <img className="chat-nav__item__icon" src={icon} alt="" />
            <div className="chat-nav__item__name">通讯录</div>
          </div>
          <div className="chat-nav__item">
            <img className="chat-nav__item__icon" src={icon} alt="" />
            <div className="chat-nav__item__name">发现</div>
          </div>
          <div className="chat-nav__item" onClick={this.handleShowDialog.bind(this, true)}>
            <img className="chat-nav__item__icon" src={icon} alt="" />
            <div className="chat-nav__item__name">我</div>
          </div>
        </nav>
        <DialogView
          isActive={this.state.isDialogActive}
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

export default App;

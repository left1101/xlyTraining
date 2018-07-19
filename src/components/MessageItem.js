import React, { Component } from 'react';

export default class MessageItem extends Component {
  onMsgClick = () => {
    const { onClick, item } = this.props;
    if (onClick) {
      onClick(item);
    }
  }

  handleItemMoreClick = () => {
    const { onItemMoreClick, index } = this.props
    onItemMoreClick && onItemMoreClick(index)
  }

  handleSelectItem = () => {
    const { onSelectItem, index } = this.props
    onSelectItem && onSelectItem(index)
  }

  renderSelectBtn() {
    const { showMultipleSelect, index } = this.props
    if (!Array.isArray(showMultipleSelect)) {
      return null
    }
    if (showMultipleSelect.includes(index)) {
      return (
        <div className="chat-list__item__content__selectBtnCon" onClick={this.handleSelectItem}>
          <div className="chat-list__item__content__selectBtn selected"/>
        </div>
      )
    }
    return (
      <div className="chat-list__item__content__selectBtnCon" onClick={this.handleSelectItem}>
        <div className="chat-list__item__content__selectBtn noSelected"/>
      </div>
    )
  }

  render(){
    const { item } = this.props;
    return(
      <li className="chat-list__item" onClick={this.onMsgClick}>
        {this.renderSelectBtn()}
        <img className="chat-list__item__avatar" src={item.icon} alt="" />
        <div className="chat-list__item__content">
          <div className="chat-list__item__content__topBar">
            <h2 className="chat-list__item__content__title">{item.title}</h2>
            <div className="chat-list__item__content__time">{item['time']}</div>
          </div>
          <div className="chat-list__item__content__recentMsg">{item['descript']}</div>
          <div className="chat-list__item__content__moreBtn" onClick={this.handleItemMoreClick}>更多</div>
        </div>
      </li>
    );
  }
}


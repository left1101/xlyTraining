import React, { Component } from 'react';
import icon from '../resource/icon_Good_B-2.png';

export default class ChatNav extends Component {
  constructor(props) {
    super(props)
  }

  renderItem(item) {
    return (
      <div className="chat-nav__item">
        <img className="chat-nav__item__icon" src={icon} alt="" />
        <div className="chat-nav__item__name">{item}</div>
      </div>
    )
  }

  render() {
    return (
      <nav className="chat-nav">
        {
          ['微信', '通讯录', '发现', '我'].map(item => {
            return this.renderItem(item)
          })
        }
      </nav>
    )
  }
}

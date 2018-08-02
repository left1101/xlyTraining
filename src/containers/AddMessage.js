import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as messageActionsCreators from '../actions/index'

class AddMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      descript: '',
      time: ''
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescChange = this.handleDescChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
    this.handleCloseDialog = this.handleCloseDialog.bind(this)
    this.handleConfirmAddClick = this.handleConfirmAddClick.bind(this)
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    })
  }

  handleDescChange(event) {
    this.setState({
      descript: event.target.value
    })
  }

  handleTimeChange(event) {
    this.setState({
      time: event.target.value
    })
  }

  handleCloseDialog() {
    const { onCloseClick } = this.props
    onCloseClick && onCloseClick(false)
  }

  handleConfirmAddClick() {
    const { router } = this.props
    router.goBack()
    // const { title, descript, time } = this.state
    // const { handleAddItem } = this.props
    // if (!title || !descript || !time) {
    //   return
    // }
    // handleAddItem && handleAddItem({
    //   title,
    //   descript,
    //   time,
    // })
  }

  renderAddMessageView() {
    return (
      <div className="ViewContent">
        <div>
          标题：<input onChange={this.handleTitleChange}/>
        </div>
        <div>
          描述：<input onChange={this.handleDescChange} />
        </div>
        <div>
          时间：<input onChange={this.handleTimeChange} />
        </div>
        <div className="confirmBtn" onClick={this.handleConfirmAddClick}>确认</div>
      </div>
    )
  }

  renderMoreBtnView() {
    const { handleDeleteItem, handleSetToTop, handleMultipleClick } = this.props
    return (
      <div className="ViewContent">
        <div className="MoreBtnItem" onClick={handleSetToTop}>置顶</div>
        <div className="MoreBtnItem" onClick={handleDeleteItem}>删除</div>
        <div className="MoreBtnItem" onClick={handleMultipleClick}>多选</div>
      </div>
    )
  }

  render() {
    return (
      <div className="AddMessage">
        <div>
          标题：<input onChange={this.handleTitleChange}/>
        </div>
        <div>
          描述：<input onChange={this.handleDescChange} />
        </div>
        <div>
          时间：<input onChange={this.handleTimeChange} />
        </div>
        <div className="confirmBtn" onClick={this.handleConfirmAddClick}>确认</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    messageActions: bindActionCreators(messageActionsCreators, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMessage)

import React  from 'react'
import './NavBar.css'

export default class NavBar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { onShowAddViewClick } = this.props
    return (
      <div className="NavBar">
        <div className="NavBarLeft">微信</div>
        <div className="NavBarRight" onClick={onShowAddViewClick}>+</div>
      </div>
    )
  }
}
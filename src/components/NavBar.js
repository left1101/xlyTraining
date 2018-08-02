import React  from 'react'
import { Link } from 'react-router'
import './NavBar.css'

export default class NavBar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    // const { onShowAddViewClick } = this.props
    // <div className="NavBarRight" onClick={onShowAddViewClick}>+</div>
    return (
      <div className="NavBar">
        <div className="NavBarLeft">微信</div>
        <Link className="NavBarRight" to="/addMessage">+</Link>
      </div>
    )
  }
}
import React from 'react';
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { children } = this.props
    return (
      <div>
        {children}
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

export default connect(mapStateToProps)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReduxReader extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="cotainer">
        <div className="notification">
          <h1>
          {this.props.count}
          </h1>
        </div>
    </div>
    )
  }
}
function mapStateToProps(state){
  console.log(state);
  return {
    count: state.inputReducer,
  };
}
export default connect(mapStateToProps)(ReduxReader);

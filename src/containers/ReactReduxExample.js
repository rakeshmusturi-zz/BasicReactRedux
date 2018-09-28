import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCounter, inputData } from '../actions';
import { bindActionCreators } from 'redux';

class ReactReduxExample extends Component {
  constructor(props) {
    super(props);
  };
  counterChange = (e) => {
    e.preventDefault();
    this.props.dispatch(addCounter())
  }
  getInputValue = (e) => {
    this.props.dispatch(inputData(e.target.value));
  }
   render() {
     return (
       <div>
        <form>
          <div className="field is-grouped">
            <div className="control">
              <input type="text" onChange={(e) => this.getInputValue(e)} />
            </div>
          </div>
        </form>
        </div>
     )
   }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      reduxActions: bindActionCreators(inputData, dispatch)
    }
  }
}
export default connect(mapDispatchToProps)(ReactReduxExample);

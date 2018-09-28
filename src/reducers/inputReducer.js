import * as actionType from '../actions/ActionType';

const inputReducer = (state = '', action) => {
  let newState;
  switch (action.type) {
    case actionType.GET_INPUT_DATA:
      return newState = action.payload;
    default:
      return state
  }
}

export default inputReducer;

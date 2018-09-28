import * as actionType from './ActionType';

export const addCounter = () => ({
  type: actionType.ADD_COUNTER,
  payload: 1
});

export const removeCounter = () => ({
  type: actionType.REMOVE_COUNTER,
  payload: 1
});

export const inputData = (data) => ({
  type: actionType.GET_INPUT_DATA,
  payload: data
});

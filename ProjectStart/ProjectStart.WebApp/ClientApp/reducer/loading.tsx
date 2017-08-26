import { StateLifeCycle } from '../Component/common';
let initialState = {
    status: StateLifeCycle.End
}

export default function (state = initialState, action) {
  let newState: { status: StateLifeCycle };
    switch (action.type) {
    case `LOADING_${StateLifeCycle.Started}`:
      newState = {
            ...state,
          status:StateLifeCycle.Started
        }
        break;
    case `LOADING_${StateLifeCycle.End}`:
      newState = {
        ...state,
        status:StateLifeCycle.End
      }
      break;
    case `LOADING_${StateLifeCycle.Error}`:
      newState = {
        ...state,
        ...action.payload,
        status:StateLifeCycle.Error
      }
      break;
      default :
        newState = {
          ...state,
          status:StateLifeCycle.End
        }
      break;
    }
    return newState;
}
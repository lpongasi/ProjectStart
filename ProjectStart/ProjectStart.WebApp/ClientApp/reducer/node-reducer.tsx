import { StateLifeCycle } from '../component/common';
let initialState = {
  status: StateLifeCycle.End,
  nodes: [],
  selectedNode: null
}

export default function (state = initialState, action) {
  let newState: { status: StateLifeCycle };
  switch (action.type) {
    case `NODE_GETALL_${StateLifeCycle.Started}`:
      newState = {
        ...state,
        status: StateLifeCycle.Started
      }
      break;
    case `NODE_GETALL_${StateLifeCycle.Success}`:
      newState = {
        ...state,
        nodes: action.payload.result,
        status: StateLifeCycle.Success
      }
      break;
    case `NODE_GETALL_${StateLifeCycle.Error}`:
      newState = {
        ...state,
        ...action.payload,
        status: StateLifeCycle.Error
      }
      break;
    case `NODE_GETALL_${StateLifeCycle.End}`:
      newState = {
        ...state,
        status: StateLifeCycle.End
      }
      break;
    case 'NODE_SELECT':
      newState = {
        ...state,
        selectedNode: {
          ...state.selectedNode,
          ...action.payload.selectedNode
        }
      }
      break;
    default:
      newState = {
        ...state
      }
      break;
  }
  return newState;
}
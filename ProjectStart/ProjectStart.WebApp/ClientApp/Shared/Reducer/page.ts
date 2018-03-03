import { PAGE } from 'shared/Component/action';
import { StateLifeCycle } from 'shared/Component/common';

export default function (state = {}, action) {
    let newState = { ...state };
    switch (action.type) {
        case PAGE.started:
            newState = {
                ...state,
                status: StateLifeCycle.Started,
            };
            break;
        case PAGE.success:
            newState = {
                ...action.payload.data,
                status: StateLifeCycle.Success,
            };
            break;
        case PAGE.error:
            newState = {
                ...state,
                status: StateLifeCycle.Error,
            };
            break;
        case PAGE.end:
            newState = {
                ...state,
                status: StateLifeCycle.End,
            };
            break;
    }
    return newState;
}

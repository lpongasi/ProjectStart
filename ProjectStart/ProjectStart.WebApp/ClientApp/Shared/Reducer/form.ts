import { UPDATE_FORM, UPDATE_FORM_INPUT } from 'shared/Component/action';
import { StateLifeCycle } from 'shared/Component/common';
import { IResponse } from 'shared/Component/response';

type ActionPayload = {
    type: string;
    payload: IResponse
};

export default function (state: { [key: string]: IResponse; } = {}, action: ActionPayload) {
    let newState = { ...state };
    switch (action.type) {
        case UPDATE_FORM_INPUT:
            const inputs = state[action.payload.formId] && state[action.payload.formId].inputs ? state[action.payload.formId].inputs : {};
            newState = {
                ...state,
                [action.payload.formId]: {
                    ...state[action.payload.formId],
                    inputs: {
                        ...inputs,
                        [action.payload.currentInput]: action.payload.currentInputValue,
                    },
                },
            };
            break;
        case UPDATE_FORM.started:
            newState = {
                ...state,
                [action.payload.formId]: {
                    ...state[action.payload.formId],
                    status: StateLifeCycle.Started,
                },
            };
            break;
        case UPDATE_FORM.init:
            const initPayload = { ...action.payload };
            delete initPayload.formId;
            newState = {
                ...state,
                [action.payload.formId]: {
                    ...state[action.payload.formId],
                    ...initPayload,
                    status: StateLifeCycle.Init,
                },
            };
            break;
        case UPDATE_FORM.success:
            const successPayload = { ...action.payload };
            delete successPayload.formId;
            newState = {
                ...state,
                [action.payload.formId]: {
                    ...successPayload,
                    status: StateLifeCycle.Success,
                },
            };
            break;
        case UPDATE_FORM.error:
            const errorPayload = { ...action.payload };
            delete errorPayload.formId;
            newState = {
                ...state,
                [action.payload.formId]: {
                    ...state[action.payload.formId],
                    ...errorPayload,
                    status: StateLifeCycle.Error,
                },
            };
            break;
        case UPDATE_FORM.end:
            newState = {
                ...state,
                [action.payload.formId]: {
                    ...state[action.payload.formId],
                    status: StateLifeCycle.End,
                },
            };
            break;
    }
    return newState;
}

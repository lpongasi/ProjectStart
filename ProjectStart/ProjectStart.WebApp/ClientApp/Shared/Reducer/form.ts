import { UPDATE_FORM, UPDATE_FORM_INIT, UPDATE_FORM_INPUT } from 'shared/Component/action';
import { StateLifeCycle } from 'shared/Component/common';
import { Response } from 'shared/AppModels/Response';

export default function (state = {}, action) {
    let newState = { ...state };
    switch (action.type) {
        case UPDATE_FORM_INPUT:
            newState = {
                ...state,
                [action.payload.formName]: {
                    ...state[action.payload.formName],
                    [action.payload.inputName]: action.payload.value,
                },
            };
            break;
        case UPDATE_FORM.started:
            newState = {
                ...state,
                [action.payload.formName]: {
                    ...state[action.payload.formName],
                    status: StateLifeCycle.Started,
                },
            };
            break;
        case UPDATE_FORM_INIT:
            newState = {
                ...state,
                [action.payload.formName]: {
                    ...state[action.payload.formName],
                    status: StateLifeCycle.End,
                    payload: new Response<string>(),
                },
            };
            break;
        case UPDATE_FORM.success:
            const payload = { ...action.payload };
            delete payload.formName;
            newState = {
                ...state,
                [action.payload.formName]: {
                    // ...state[action.payload.formName], to empty the form
                    payload,
                    status: StateLifeCycle.Success,
                },
            };
            break;
        case UPDATE_FORM.error:
            const errorPayload = { ...action.payload };
            delete errorPayload.formName;
            newState = {
                ...state,
                [action.payload.formName]: {
                    ...state[action.payload.formName],
                    payload: { ...errorPayload },
                    status: StateLifeCycle.Error,
                },
            };
            break;
        case UPDATE_FORM.end:
            newState = {
                ...state,
                [action.payload.formName]: {
                    ...state[action.payload.formName],
                    status: StateLifeCycle.End,
                },
            };
            break;
    }
    return newState;
}

import { UPDATE_FORM_INPUT } from 'shared/Component/action';

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
    }
    return newState;
}

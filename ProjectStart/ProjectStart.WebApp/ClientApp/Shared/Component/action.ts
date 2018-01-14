import { dispatcher } from 'shared/Component/common';

export const UPDATE_FORM_INPUT: string = 'UPDATE_FORM_INPUT';
export const updateFormInput = (formName: string, inputName: string, value) =>
    dispatcher(UPDATE_FORM_INPUT, { formName, inputName, value });

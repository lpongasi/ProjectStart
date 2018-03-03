import { CreateStateAction, dispatcher } from 'shared/Component/common';

export const UPDATE_FORM_INPUT: string = 'UPDATE_FORM_INPUT';
export const UPDATE_FORM_INIT: string = 'UPDATE_FORM_INIT';
export const UPDATE_FORM = CreateStateAction('UPDATE_FORM');
export const PAGE = CreateStateAction('PAGE');
export const updateFormInput = (formName: string, inputName: string, value) =>
    dispatcher(UPDATE_FORM_INPUT, { formName, inputName, value });

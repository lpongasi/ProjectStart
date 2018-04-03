import { StateLifeCycle } from 'shared/Component/common';


export interface IResponse {
    status: StateLifeCycle;
    success: boolean;
    error: boolean;
    message: string;
    errors: { [key: string]: string; };
    formId: string;
    currentInput: string;
    currentInputValue: any;
    inputs: { [key: string]: any; };
}

export interface IResponseData<T = any> extends IResponse {
    data: T;
}


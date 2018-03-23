import { StateLifeCycle } from 'shared/Component/common';


export interface IResponse<T = any> {
    status: StateLifeCycle;
    success: boolean;
    error: boolean;
    message: string;
    errors: { [key: string]: string; };
    formId: string;
    data: T;
    currentInput: string;
    currentInputValue: any;
    inputs: { [key: string]: any; };
}

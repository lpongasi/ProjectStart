import { StateLifeCycle } from 'shared/Component/common';


export default interface Response<T = any> {
    status: StateLifeCycle;
    success: boolean;
    error: boolean;
    message: string;
    errors: { [key: string]: string; };
    formId: string;
    currentInput: string;
    currentInputValue: any;
    inputs: { [key: string]: any; };
    data: T;
}


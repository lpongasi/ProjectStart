import { connect } from 'react-redux';
import { UPDATE_FORM, UPDATE_FORM_INPUT } from 'shared/Component/action';
import { IResponse } from 'shared/Component/response';
import Store from 'shared/Component/store';

export enum StateLifeCycle {
    Init = ('init') as any,
    Started = ('started') as any,
    Success = ('success') as any,
    Error = ('error') as any,
    End = ('end') as any,
}

export enum MethodType {
    Get = ('get') as any,
    Post = ('post') as any,
    Put = ('put') as any,
    Delete = ('delete') as any,
}

export type ActionTypes = {
    id: string,
    init: string,
    started: string,
    success: string,
    error: string,
    end: string,
};

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



export type RootState = {
    form?: { [key: string]: IResponse; };
    page?: any;
};
export const CreateStateAction = (id: string): ActionTypes => {
    return ({
        id,
        init: `${id}_${StateLifeCycle.Init}`,
        started: `${id}_${StateLifeCycle.Started}`,
        success: `${id}_${StateLifeCycle.Success}`,
        error: `${id}_${StateLifeCycle.Error}`,
        end: `${id}_${StateLifeCycle.End}`,
    });
};
export const dispatcher = (type: string, payload: any = null) =>
    Store.dispatch({
        type,
        payload,
    });

let generatedIdNumber = 0;
export const generateId = () => generatedIdNumber++;

export const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

export const PayLoad = <T = any>(form, fallBackValue: T = null): T =>
    (form && form.payload ? form.payload : fallBackValue) as T;

export const PayLoadValue = <T = any>(form: IResponse<T>, key: string, fallBackValue: T = null) =>
    form && form[key] ? form[key] : fallBackValue;

export const FormData = <T = any>(form: IResponse, fallBackValue: T = null): T => PayLoadValue<T>(form, 'data', fallBackValue);

export const FormError = (form: IResponse): { [key: string]: any; } => PayLoadValue<object>(form, 'errors', {});

export const FormInputs = <T = any>(form: IResponse): any => PayLoadValue<T>(form, 'inputs', null);

export const AddInitialData = (formId: string, data: object) =>
    dispatcher(UPDATE_FORM.init, { formId, ...data });

export const AddInitialFormInputs = (formId: string, data: object) =>
    dispatcher(UPDATE_FORM.init, { formId, inputs: { ...data } });

export const UpdateFormInput = (formId: string, input: string, value: any) =>
    dispatcher(UPDATE_FORM_INPUT, { formId, currentInput: input, currentInputValue: value });

export const Connector =
    <OwnProps, StateProps = any, DispatchProps = any>(mapStateToProps: (state: RootState) => StateProps, mapDispatchToProps: DispatchProps = null) =>
        <T>(target: T): T => {
            return connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(target as any) as any;
        };

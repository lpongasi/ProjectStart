import Store from 'shared/Component/store';
import { connect } from 'react-redux';

export enum StateLifeCycle {
    Init = ('Initialize') as any,
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



export type RootState = {
    form?: { [key: string]: any; };
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

export const PayLoadValue = <T = any>(form, key: string, fallBackValue: T = null) =>
    form && form.payload && form.payload[key] ? form.payload[key] : fallBackValue;

export const FormData = <T = any>(form: any, fallBackValue: T = null): T => PayLoadValue<T>(form, 'data', fallBackValue);

export const FormError = (form: any): any => PayLoadValue<object>(form, 'errors', {});


export const Connector =
    <OwnProps, StateProps = any, DispatchProps = any>(mapStateToProps: (state: RootState) => StateProps, mapDispatchToProps: DispatchProps = null) =>
        <T>(target: T): T => {
            return connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(target as any) as any;
        };
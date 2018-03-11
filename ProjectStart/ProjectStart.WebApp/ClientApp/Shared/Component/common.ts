import Store from 'shared/Component/store';

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
    form?: any;
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

export const getFormData = <T = any>(form: any, errorReturn: T = null): T =>
    form && form.payload && form.payload.data ? form.payload.data : errorReturn;
export const getFormError = (form: any): any => {
    const hasPayload = form && form.payload ? true: false;
    const hasError = hasPayload && form.status === StateLifeCycle.Error ? true : false;
    const hasErrors = hasError && form.payload.errors ? true : false;
    return hasErrors ? form.payload.errors : hasError ? 'System Error Found! Please contact the system administrator!' : '';

}
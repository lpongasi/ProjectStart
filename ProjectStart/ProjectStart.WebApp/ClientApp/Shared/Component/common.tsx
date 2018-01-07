import Store from 'shared/Component/store';

export enum StateLifeCycle {
    Started = ('STARTED') as any,
    Success = ('SUCCESS') as any,
    Error = ('ERROR') as any,
    End = ('END') as any,
}

export enum MethodType {
    Get = ('GET') as any,
    Post = ('POST') as any,
    Put = ('PUT') as any,
    Delete = ('DELETE') as any,
}

export type ActionTypes = {
    Id: string,
    Url: string,
    Method: string,
    Started: string,
    Success: string,
    Error: string,
    End: string,
};

export const CreateStateAction = (url: string, method: MethodType): ActionTypes => ({
    Id: `${url}_${method}`,
    Url: url,
    Method: method.toString(),
    Started: `${url}_${method}_${StateLifeCycle.Started}`,
    Success: `${url}_${method}_${StateLifeCycle.Success}`,
    Error: `${url}_${method}_${StateLifeCycle.Error}`,
    End: `${url}_${method}_${StateLifeCycle.End}`,
});


export const dispatcher = (type: string, payload: any = null) =>
    Store.dispatch({
        type,
        payload,
    });

let generatedID = 0;
export const GenerateId = () => generatedID++;

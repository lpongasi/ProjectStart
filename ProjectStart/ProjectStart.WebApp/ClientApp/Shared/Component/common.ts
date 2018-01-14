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
  id: string,
  url: string,
  method: string,
  started: string,
  success: string,
  error: string,
  end: string,
};

export const CreateStateAction = (url: string, method: MethodType): ActionTypes => ({
  id: `${url}_${method}`,
  url,
  method: method.toString(),
  started: `${url}_${method}_${StateLifeCycle.Started}`,
  success: `${url}_${method}_${StateLifeCycle.Success}`,
  error: `${url}_${method}_${StateLifeCycle.Error}`,
  end: `${url}_${method}_${StateLifeCycle.End}`,
});


export const dispatcher = (type: string, payload: any = null) =>
  Store.dispatch({
    type,
    payload,
  });

let generatedIdNumber = 0;
export const generateId = () => generatedIdNumber++;

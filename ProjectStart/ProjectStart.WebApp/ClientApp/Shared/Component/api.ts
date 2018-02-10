import axios, { AxiosResponse } from 'axios';
import { IGenericResponse } from 'shared/AppModels/GenericResponse';
import { ActionTypes, dispatcher } from 'shared/Component/common';


const appResponse = (actionTypes: ActionTypes, value: AxiosResponse<IGenericResponse<any>>): IGenericResponse<any> => {
    if (value.data.success) {
        dispatcher(actionTypes.success, { ...value.data });
    } else {
        dispatcher(actionTypes.error, { ...value });
    }
    dispatcher(actionTypes.end, {});
    dispatcher('LOADING_END', {});
    return value.data;
};

const errorResponse = (actionTypes: ActionTypes, error: any) => {
    dispatcher(actionTypes.error, { ...error });
    dispatcher(actionTypes.end, {});
    dispatcher('LOADING_END', {});
    return error;
};

export const Api = <T = any>(
    method: string,
    url: string,
    requestData: any,
    actionTypes: ActionTypes,
): Promise<IGenericResponse<T>> => {
    dispatcher('LOADING_START', {});
    dispatcher(actionTypes.started, { ...requestData });
    return axios.request<IGenericResponse<T>>({
        headers: {
            'Content-Type': 'application/json',
            'X-XSRF-Token': (document.querySelector('input[name="__RequestVerificationToken"]') as HTMLInputElement).value,
        },
        url,
        method,
        data: { ...requestData },
        onUploadProgress: (progressEvent: ProgressEvent) => {
            dispatcher('UPLOAD_PROGRESS', { percent: Math.floor((progressEvent.loaded * 100) / progressEvent.total) });
        },
        onDownloadProgress: (progressEvent: ProgressEvent) => {
            dispatcher('DOWNLOAD_PROGRESS', { percent: Math.floor((progressEvent.loaded * 100) / progressEvent.total) });
        },
    }).then(value => appResponse(actionTypes, value)).catch(error => errorResponse(actionTypes, error));
};


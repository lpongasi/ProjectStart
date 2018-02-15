﻿import axios, { AxiosResponse } from 'axios';
import { IGenericResponse } from 'shared/AppModels/GenericResponse';
import { UPDATE_FORM } from 'shared/Component/action';
import { ActionTypes, dispatcher } from 'shared/Component/common';


const appResponse = (actionTypes: ActionTypes, value: AxiosResponse<IGenericResponse<any>>): IGenericResponse<any> => {
    if (value.data.success) {
        dispatcher(actionTypes.success, { ...value.data });
        dispatcher(UPDATE_FORM.success, { ...value.data, formName: actionTypes.id  });
    } else {
        dispatcher(actionTypes.error, { ...value });
        dispatcher(UPDATE_FORM.error, { ...value, formName: actionTypes.id  });
    }
    dispatcher('LOADING_END', {});
    return value.data;
};

const errorResponse = (actionTypes: ActionTypes, error: any) => {
    const transformError = error && error.response && error.response.data ? error.response.data : error;
    dispatcher(actionTypes.error, { ...transformError });
    dispatcher(UPDATE_FORM.error, { ...transformError, formName: actionTypes.id });
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
    dispatcher(UPDATE_FORM.started, { ...requestData, formName: actionTypes.id });
    const transformRequestData = { ...requestData };
    delete transformRequestData.payload;
    delete transformRequestData.status;
    return axios.request<IGenericResponse<T>>({
        headers: {
            'Content-Type': 'application/json',
            'X-XSRF-Token': (document.querySelector('input[name="__RequestVerificationToken"]') as HTMLInputElement).value,
        },
        url,
        method,
        data: { ...transformRequestData },
        onUploadProgress: (progressEvent: ProgressEvent) => {
            dispatcher('UPLOAD_PROGRESS', { percent: Math.floor((progressEvent.loaded * 100) / progressEvent.total) });
        },
        onDownloadProgress: (progressEvent: ProgressEvent) => {
            dispatcher('DOWNLOAD_PROGRESS', { percent: Math.floor((progressEvent.loaded * 100) / progressEvent.total) });
        },
    }).then(value => appResponse(actionTypes, value)).catch(error => errorResponse(actionTypes, error));
};


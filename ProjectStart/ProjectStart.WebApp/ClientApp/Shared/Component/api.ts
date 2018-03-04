import axios, { AxiosResponse } from 'axios';
import * as local from 'localforage';
import { IResponse } from 'shared/AppModels/Response';
import { UPDATE_FORM } from 'shared/Component/action';
import { ActionTypes, dispatcher } from 'shared/Component/common';

const getLocalId = (id, url, method) => `${id}.${url}.${method}`;

const appResponse = (url: string, method: string, actionTypes: ActionTypes, value: AxiosResponse<IResponse<any>>, isCache: boolean): IResponse<any> => {
    if (value.data.success) {
        if (isCache) {
            local.setItem(getLocalId(actionTypes.id, url, method), { ...value.data });
        }
        dispatcher(actionTypes.success, { ...value.data });
        dispatcher(UPDATE_FORM.success, { ...value.data, formName: actionTypes.id });
    } else {
        dispatcher(actionTypes.error, { ...value });
        dispatcher(UPDATE_FORM.error, { ...value, formName: actionTypes.id });
    }
    dispatcher('LOADING_END', {});
    return value.data;
};
const errorResponse = (actionTypes: ActionTypes, error: any) => {
    const transformError = error && error.response && error.response.data ? error.response.data : error;
    dispatcher(actionTypes.error, { errors: transformError });
    dispatcher(UPDATE_FORM.error, { errors: transformError, formName: actionTypes.id });
    dispatcher('LOADING_END', {});
    return error;
};

export const Api = async <T = any>(
    method: string,
    url: string,
    requestData: any,
    actionTypes: ActionTypes,
    isCache: boolean = true,
): Promise<IResponse<T>> => {
    if (isCache) {
        const localValue = await local.getItem(getLocalId(actionTypes.id, url, method));
        if (localValue) {
            dispatcher(actionTypes.success, { ...localValue });
            dispatcher(UPDATE_FORM.success, { ...localValue, formName: actionTypes.id });
        }
    }
    dispatcher('LOADING_START', {});
    dispatcher(actionTypes.started, { ...requestData });
    dispatcher(UPDATE_FORM.started, { ...requestData, formName: actionTypes.id });
    const transformRequestData = { ...requestData };
    delete transformRequestData.payload;
    delete transformRequestData.status;
    return axios.request<IResponse<T>>({
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
    }).then(value => appResponse(url, method, actionTypes, value, isCache)).catch(() => errorResponse(actionTypes, 'System Error Found! Please contact the system administrator!'));
};


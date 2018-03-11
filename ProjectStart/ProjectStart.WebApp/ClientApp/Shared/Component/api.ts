import axios, { AxiosResponse } from 'axios';
import * as local from 'localforage';
import { IResponse } from 'shared/AppModels/Response';
import { UPDATE_FORM } from 'shared/Component/action';
import { dispatcher } from 'shared/Component/common';

const getLocalId = (id, url, method) => `${id}.${url}.${method}`;

const appResponse = (url: string, method: string, id: string, value: AxiosResponse<IResponse<any>>, isCache: boolean): IResponse<any> => {
    if (value.data.success) {
        if (isCache) {
            local.setItem(getLocalId(id, url, method), { ...value.data });
        }
        dispatcher(UPDATE_FORM.success, { ...value.data, formName: id });
    } else {
        dispatcher(UPDATE_FORM.error, { ...value, formName: id });
    }
    dispatcher('LOADING_END', {});
    return value.data;
};
const errorResponse = (id: string, error: any) => {
    const transformError = error && error.response && error.response.data ? error.response.data : error;
    dispatcher(UPDATE_FORM.error, { ...transformError, formName: id });
    dispatcher('LOADING_END', {});
    return error;
};

export const Api = async <T = any>(
    id: string,
    method: string,
    url: string,
    requestData: any,
    isCache: boolean = true,
): Promise<IResponse<T>> => {
    dispatcher('LOADING_START', {});
    if (isCache) {
        const localValue = await local.getItem(getLocalId(id, url, method));
        if (localValue) {
            dispatcher(UPDATE_FORM.init, { ...localValue, ...requestData, formName: id });
        }
    }
    
    dispatcher(UPDATE_FORM.started, { ...requestData, formName: id });

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
    }).then(value => appResponse(url, method, id, value, isCache)).catch(error => errorResponse(id, error));
};


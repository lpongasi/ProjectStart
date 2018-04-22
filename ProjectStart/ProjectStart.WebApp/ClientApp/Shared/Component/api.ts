import axios, { AxiosResponse } from 'axios';
import * as local from 'localforage';
import { UPDATE_FORM } from 'shared/Component/action';
import { dispatcher } from 'shared/Component/common';
import { IResponseData } from 'shared/Component/response';

const getLocalId = (id, url, method) => `${id}.${url}.${method}`;

const appResponse = (url: string, method: string, id: string, value: AxiosResponse<IResponseData<any>>, isCache: boolean, localData: (data: any) => void): IResponseData<any> => {
    if (value.data.success) {
        if (isCache) {
            local.setItem(getLocalId(id, url, method), { ...value.data });
            if (localData) {
                localData(value.data);
            }
        }
        dispatcher(UPDATE_FORM.success, { ...value.data, formId: id });
    } else {
        dispatcher(UPDATE_FORM.error, { ...value.data, formId: id });
    }
    dispatcher('LOADING_END', {});
    return value.data;
};
const errorResponse = (id: string, error: IResponseData<any>) => {
    dispatcher(UPDATE_FORM.error, { errors: error.errors, formId: id });
    dispatcher('LOADING_END', {});
    return error;
};

export const Api = <T = any>(
    id: string,
    method: string,
    url: string,
    requestData: any,
    isCache: boolean = true,
    localData?: (data: T) => void,
): Promise<IResponseData<T>> => {
    dispatcher('LOADING_START', {});
    if (isCache) {
        local.getItem(getLocalId(id, url, method)).then(data => {
            if (localData) {
                localData(data as T);
            }
            dispatcher(UPDATE_FORM.init, { ...data, formId: id });
        });
    }
    dispatcher(UPDATE_FORM.started, { formId: id });

    const transformRequestData = { ...requestData };
    delete transformRequestData.payload;
    delete transformRequestData.status;
    return axios.request<IResponseData<T>>({
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
    }).then(value => appResponse(url, method, id, value, isCache, localData)).catch(error => {
        const errors = error && error.response && error.response.data ? error.response.data : {
            errors: {},
        };
        return errorResponse(id, { ...errors });
    });
};


﻿import axios, { AxiosPromise } from 'axios';

export const Api = (method: string, url: string, requestData: any): AxiosPromise<any> => {
    switch (method) {
        case 'post':
            return axios.post(url, requestData);
        case 'get':
            return axios.get(url, requestData);
    }
}

//import { ActionTypes, dispatcher, StateLifeCycle } from 'shared/Component/common';

//export const api = (
//    actionType: ActionTypes,
//    data: any = null,
//) => {
//    //dispatcher(actionType.Started);
//    //dispatcher(`LOADING_${StateLifeCycle.Started}`);
//    //$.ajax({
//    //    method: actionType.Method,
//    //    url: actionType.Url,
//    //    dataType: 'json',
//    //    cache: false,
//    //    data: { ...data },
//    //})
//    //    .done(data => {
//    //        dispatcher(actionType.Success, data);
//    //        dispatcher(`LOADING_${StateLifeCycle.End}`);
//    //    })
//    //    .fail((jqXhr, textStatus, errorThrown) => {
//    //        dispatcher(actionType.Error, { ...jqXhr.responseJSON, errorThrown, textStatus });
//    //        dispatcher(`LOADING_${StateLifeCycle.Error}`, { ...jqXhr.responseJSON, errorThrown });
//    //    })
//    //    .always(() => {
//    //        dispatcher(actionType.End);
//    //    });
//};
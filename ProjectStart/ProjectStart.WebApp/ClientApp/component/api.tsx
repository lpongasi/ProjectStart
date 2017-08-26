import * as $ from 'jquery';
import Store from './store';
import {StateLifeCycle} from './common';

export enum MethodType {
  Get = ('get') as any,
  Post = ('post') as any,
  Put = ('put') as any,
  Delete = ('delete') as any
}

const dispatcher = (type: string = null, payload: any = null) => {
  return {
    type: type,
    payload: {...payload}
  }
};

export const api = (dispatchPrefix: string = 'FETCH', methodType: MethodType = MethodType.Get, url: string = '', data: any = null) => {
  Store.dispatch(dispatcher(`${dispatchPrefix}_${StateLifeCycle.Started}`));
  Store.dispatch(dispatcher(`LOADING_${StateLifeCycle.Started}`));
  $.ajax({
      method: methodType,
      url: url,
      dataType: 'json',
      cache: false,
      data: { ...data }
    })
    .done((data) => {
      Store.dispatch(dispatcher(`${dispatchPrefix}_${StateLifeCycle.Success}`, data));
      Store.dispatch(dispatcher(`LOADING_${StateLifeCycle.End}`));
    })
    .fail((jqXhr, textStatus, errorThrown) => {
      Store.dispatch(dispatcher(`${dispatchPrefix}_${StateLifeCycle.Error}`, { ...jqXhr.responseJSON, errorThrown }));
      Store.dispatch(dispatcher(`LOADING_${StateLifeCycle.Error}`, { ...jqXhr.responseJSON, errorThrown }));
    })
    .always(() => {
      Store.dispatch(dispatcher(`${dispatchPrefix}_${StateLifeCycle.End}`));
      Store.dispatch(dispatcher(`LOADING_${StateLifeCycle.End}`));
    });
};
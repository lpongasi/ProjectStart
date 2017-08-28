import * as React from 'react';

import {
Link
} from 'react-router-dom';

import { api, MethodType } from '../component/api';

export default () => (
  <div>
    HELLO HOME PAGE
<input type="checkbox" id="text"/>
<label htmlFor="text">asdawda</label>
    <Link to='/Manage/Item' className='waves-effect waves-light btn'>
    <span className="fa fa-user"> </span> 
    LINK</Link>
    </div>
);

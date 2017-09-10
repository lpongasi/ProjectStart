import * as React from 'react';

import {
Link
} from 'react-router-dom';

export default () => (
  <div>
    HELLO HOME PAGE
<input type="checkbox" id="text"/>
<label htmlFor="text">asdawda</label>
    <Link to='/Manage/Item' className='waves-effect waves-light btn'>
    <span className="fa fa-user"> </span> 
    USERS TEST RELOAD</Link>
    </div>
);

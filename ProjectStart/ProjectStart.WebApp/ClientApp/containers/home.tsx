import * as React from 'react';
import {
    Link
} from 'react-router-dom';
import { Box, BoxItem, BoxBig, BoxTall, BoxWide, BoxGroup, BoxMedium } from '../common/box';

export default () => (
    <div>
        HELLO HOME PAGE
<input type="checkbox" id="text" />
        <label htmlFor="text">asdawda</label>
        <Link to='/Manage/Item' className='waves-effect waves-light btn'>
            <span className="fa fa-user"> </span>
            USERS TEST RELOAD</Link>

        <Box>
            <BoxItem
                Id="1"
                BoxType={BoxBig}
                ImageBackgroundUrl=""
                Content=""
                IsModified={false}
                LogoUrl="" />
            <BoxItem
                Id="2" BoxType={BoxGroup}>
                <BoxItem
                    Id="3"
                    BoxType={BoxTall} />
                <BoxItem
                    Id="4"
                    BoxType={BoxMedium} />
                <BoxItem
                    Id="5"
                    BoxType={BoxMedium} />
            </BoxItem>
            <BoxItem
                Id="6"
                BoxType={BoxGroup}>
                <BoxItem
                    Id="7"
                    BoxType={BoxTall} />
                <BoxItem
                    Id="8"
                    BoxType={BoxMedium} />
                <BoxItem
                    Id="9"
                    BoxType={BoxMedium} />
            </BoxItem>
            <BoxItem
                Id="10"
                BoxType={BoxGroup} >
                <BoxItem
                    Id="11"
                    BoxType={BoxMedium} />
                <BoxItem
                    Id="12"
                    BoxType={BoxMedium} />
                <BoxItem
                    Id="13"
                    BoxType={BoxWide} />
            </BoxItem>
            <BoxItem
                Id="14"
                BoxType={BoxGroup}>
                <BoxItem
                    Id="15"
                    BoxType={BoxMedium} />
                <BoxItem
                    Id="16"
                    BoxType={BoxMedium} />
                <BoxItem
                    Id="17"
                    BoxType={BoxWide} />
            </BoxItem>
            <BoxItem
                Id="18"
                BoxType={BoxGroup}>
                <BoxItem
                    Id="19"
                    BoxType={BoxMedium} />
                <BoxItem
                    Id="20"
                    BoxType={BoxMedium} />
                <BoxItem
                    Id="21"
                    BoxType={BoxWide} />
            </BoxItem>
        </Box>
    </div>
);

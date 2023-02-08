import React from 'react';
import { FlexColumns } from './FlexColumns';
// css
import '@portfoliods/scss/src/organisms/FlexColumns.scss';
import '@portfoliods/scss/src/atoms/Link.scss';
import '@portfoliods/scss/src/global.scss';

import { Link } from '../Link/Link';

export default {
    title: 'Atoms|FlexColumns',
};

export const Links = () => <FlexColumns childrens={<>
    <Link text='About me' href='' ></Link>
    <Link text='Experiences' href='' ></Link>
    <Link text='Contact me' href='' ></Link>
</>} />;

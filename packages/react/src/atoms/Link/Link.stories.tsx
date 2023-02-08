import React from 'react';
import { Link } from './Link';

// css
import '@portfoliods/scss/src/atoms/Link.scss';
import '@portfoliods/scss/src/global.scss';

export default {
    title: 'Atoms|Link',
};

export const LinkHover = () => <Link fontSize={3} active={false} href='' text='About me' />;
export const LinkActive = () => <Link fontSize={3} active={true} href='' text='About me' />;

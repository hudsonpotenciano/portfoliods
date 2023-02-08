import React from 'react';
import { PageTitle } from './PageTitle';

// css
import '@portfoliods/scss/src/atoms/PageTitle.scss';
import '@portfoliods/scss/src/global.scss';

export default {
    title: 'Atoms|PageTitle',
};

export const PageTitle1 = () => <PageTitle text='About me' />;

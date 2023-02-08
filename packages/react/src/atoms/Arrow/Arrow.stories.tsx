import React from 'react';
import { Arrow } from './Arrow';

// css
import '@portfoliods/scss/src/atoms/Arrow.scss';
import '@portfoliods/scss/src/global.scss';

export default {
    title: 'Atoms|Arrow',
};

export const ArrowDown = () => <Arrow />;
export const ArrowTop = () => <Arrow direction='top' />;

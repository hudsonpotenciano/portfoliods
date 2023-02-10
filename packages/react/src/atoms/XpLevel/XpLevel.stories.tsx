import React from 'react';
import { XpLevel } from './XpLevel';

// css
import '@portfoliods/scss/src/atoms/XpLevel.scss';
import '@portfoliods/scss/src/global.scss';

export default {
    title: 'Atoms|XpLevel',
};

export const Level = () => <XpLevel level={1} />;

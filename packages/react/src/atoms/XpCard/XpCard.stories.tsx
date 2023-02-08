import React from 'react';
import { XpCard } from './XpCard';

// css
import '@portfoliods/scss/src/atoms/XpCard.scss';
import '@portfoliods/scss/src/global.scss';

export default {
    title: 'Atoms|XpCard',
};

export const XpCard1 = () => <XpCard XpLogo={require("../../assets/images/icons/angular-icon.png")} />;

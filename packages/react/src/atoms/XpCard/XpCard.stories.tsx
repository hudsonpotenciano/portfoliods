import React from 'react';
import { XpCard } from './XpCard';

// css
import '@portfoliods/scss/src/atoms/XpCard.scss';
import '@portfoliods/scss/src/global.scss';

export default {
    title: 'Atoms|XpCard',
};

export const XpCard1 = () => <XpCard name='angular' onclick={() => { }} logo="https://images.ctfassets.net/iciuyzpdgf5z/2ydxmeswymUkxXt6D1uHF6/86fead655542451bd3939aaa90f9ecac/angular.png" />;

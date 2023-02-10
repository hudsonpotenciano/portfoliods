import React from 'react';
import { XpCardsContainer } from './XpCardsContainer';
import { XpCard } from '../../atoms/XpCard/XpCard';

// css
import '@portfoliods/scss/src/molecules/XpCardsContainer.scss';
import '@portfoliods/scss/src/atoms/XpCard.scss';
import '@portfoliods/scss/src/global.scss';

export default {
    title: 'Molecules|XpCardsContainer',
};

export const CardsContainer = () =>
    <div style={{ width: 300 }}>
        <XpCardsContainer xpCards={<>
            <XpCard XpLogo={require("../../assets/images/icons/angular-icon.png")} />
            <XpCard XpLogo={require("../../assets/images/icons/angular-icon.png")} />
            <XpCard XpLogo={require("../../assets/images/icons/angular-icon.png")} />
            <XpCard XpLogo={require("../../assets/images/icons/angular-icon.png")} />
            <XpCard XpLogo={require("../../assets/images/icons/angular-icon.png")} />
            <XpCard XpLogo={require("../../assets/images/icons/angular-icon.png")} />
        </>}></XpCardsContainer>
    </div>


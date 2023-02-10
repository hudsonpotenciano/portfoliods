import React from 'react';
import { XpContent } from './XpContent';

// css
import '@portfoliods/scss/src/atoms/XpContent.scss';
import '@portfoliods/scss/src/global.scss';

export default {
    title: 'Molecules|XpContent',
};

export const Content = () => <XpContent text={`Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
Lorem Ipsum Lorem Ipsum Lorem Ipsum 
Lorem Ipsum Lorem Ipsum Lorem Ipsum 

Title
Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
`} fontSize={3} />;

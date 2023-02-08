import React from 'react';
import { Flex5050 } from './Flex5050';
// css
import '@portfoliods/scss/src/organisms/Flex5050.scss';
import '@portfoliods/scss/src/atoms/Subtitle.scss';
import '@portfoliods/scss/src/global.scss';

import { Subtitle } from '../../atoms/Subtitle/Subtitle';

export default {
    title: 'Atoms|Flex5050',
};

export const AboutMe5050 = () => <Flex5050
    childrens={<>
        <Subtitle
            fontSize={4}
            text='Lorem Ipsum Lorem Ipsum
 Lorem Ipsum Lorem Ipsum
 Lorem Ipsum Lorem Ipsum
 Lorem Ipsum Lorem Ipsum 
Lorem Ipsum'></Subtitle>
        <img
            className=''
            width={300}
            src={require("../../assets/images/dev-picture.png")}
        />
    </>} />;

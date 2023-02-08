import React from 'react';
import { FlexRow } from './FlexRow';
// css
import '@portfoliods/scss/src/global.scss';
import '@portfoliods/scss/src/atoms/Title.scss';
import '@portfoliods/scss/src/atoms/Link.scss';
import '@portfoliods/scss/src/atoms/Subtitle.scss';
import '@portfoliods/scss/src/atoms/Margin.scss';
import '@portfoliods/scss/src/molecules/ScrollButton.scss';
import '@portfoliods/scss/src/organisms/FlexRow.scss';
import '@portfoliods/scss/src/organisms/FlexColumns.scss';
import '@portfoliods/scss/src/organisms/Flex5050.scss';

import { Title } from '../Title/Title';
import { PageTitle } from '../PageTitle/PageTitle';
import { Subtitle } from '../Subtitle/Subtitle';
import { ScrollButton } from '../../molecules/ScrollButton/ScrollButton';
import { Avatar } from '../Avatar/Avatar';
import { Margin } from '../Margin/Margin';
import { Link } from '../Link/Link';
import { FlexColumns } from '../FlexColumns/FlexColumns';
import { Flex5050 } from '../5050/Flex5050';

export default {
    title: 'Atoms|FlexRow',
};

export const Home = () => <FlexRow
    fullScreen={true}
    childrens={<>
        <div></div>
        <div>
            <Avatar></Avatar>
            <Title text='Hudson Potenciano'></Title>
            <Subtitle text='a Full Stack Dev'></Subtitle></div>
        <div>
            <FlexRow childrens={<>
                <Margin
                    bottom={true}
                    space="xxl"
                    children={
                        <FlexColumns childrens={<>
                            <Margin
                                space='lg'
                                right={true}
                                children={
                                    <Link text='About me' href='' ></Link>
                                }></Margin>
                            <Margin
                                space='lg'
                                right={true}
                                children={
                                    <Link text='Experiences' href='' ></Link>
                                }></Margin>
                            <Margin children={
                                <Link text='Contact me' href='' ></Link>
                            }></Margin>
                        </>} />
                    }></Margin>
                <Margin
                    space="sm"
                    bottom={true}
                    children={
                        <ScrollButton></ScrollButton>
                    }></Margin>

            </>}></FlexRow>
        </div>
    </>} />;


export const AboutMe = () => <FlexRow
    fullScreen={true}
    childrens={<>
        <div>
            <PageTitle text='About me'></PageTitle>
        </div>
        <div>
            <Margin
                space='lg'
                left={true}
                right={true}
                children={<Flex5050
                    childrens={<>
                        <Subtitle
                            fontSize={6}
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
                    </>} />}></Margin>
        </div>
        <div>
            <FlexRow childrens={<>
                <Margin
                    bottom={true}
                    space="xxl"
                    children={
                        <FlexColumns childrens={<>
                            <Margin
                                space='lg'
                                right={true}
                                children={
                                    <Link text='Experiences' href='' ></Link>
                                }></Margin>
                            <Margin children={
                                <Link text='Contact me' href='' ></Link>
                            }></Margin>
                        </>} />
                    }></Margin>
                <Margin
                    space="sm"
                    bottom={true}
                    children={
                        <ScrollButton></ScrollButton>
                    }></Margin>

            </>}></FlexRow>
        </div>
    </>} />;

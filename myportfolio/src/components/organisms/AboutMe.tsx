
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Component, useEffect } from "react";
import { Flex5050, FlexRow, Image5050, Margin, PageLinks, PageSection, PageTitle, Subtitle, XpContent } from "@portfoliods/react"

import '@portfoliods/scss/src/atoms/Subtitle.scss';
import '@portfoliods/scss/src/atoms/Image5050.scss';
import '@portfoliods/scss/src/atoms/PageTitle.scss';
import '@portfoliods/scss/src/molecules/PageLinks.scss';
import { Breakpoints } from "@portfoliods/foundation/src";

interface aboutMeProps {
    text: any,
    imageUrl: string,
    nextPageFunc: Function,
    prevPageFunc: Function
}

export class AboutMe extends Component<aboutMeProps> {


    mountFlex() {
        if (window.innerWidth <= Breakpoints.tablet) {
            return <FlexRow justify="center">
                <XpContent fontSize={5} text={documentToHtmlString(this.props.text)}></XpContent>
                <Image5050 alt="about me image" src={this.props.imageUrl}></Image5050>
            </FlexRow>
        }
        else {
            return <Flex5050>
                <XpContent fontSize={5} text={documentToHtmlString(this.props.text)}></XpContent>
                <Image5050 alt="about me image" src={this.props.imageUrl}></Image5050>
            </Flex5050>
        }
    }

    mountPage() {
        if (this.props.text) {
            return <>
                <div>
                    <PageTitle text='About me'></PageTitle>
                </div>
                {this.mountFlex()}
                <div>
                    <PageLinks prevPageFunc={this.props.prevPageFunc} nextPageFunc={this.props.nextPageFunc}></PageLinks>
                </div>
            </>
        }
        else {
            <div>
                loading...
            </div>
        }
    }

    render() {

        return (
            <PageSection pageId="aboutme">
                <FlexRow
                    fullScreen={true}
                    children={this.mountPage()} />
            </PageSection>
        )
    }
}

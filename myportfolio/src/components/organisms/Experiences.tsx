import React, { Component, ReactNode } from "react";
import { Flex5050, FlexRow, Line, Margin, PageLinks, PageSection, PageTitle, XpCardsContainer, XpContentContainer } from "@portfoliods/react"
import { XpContentModel } from "@portfoliods/foundation/src/types";

import '@portfoliods/scss/src/molecules/XpCardsContainer.scss';
import '@portfoliods/scss/src/molecules/XpContentContainer.scss';
import '@portfoliods/scss/src/atoms/Line.scss';

interface xpProps {
    xpContents: XpContentModel[]
}

const test = `Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
Lorem Ipsum Lorem Ipsum Lorem Ipsum 
Lorem Ipsum Lorem Ipsum Lorem Ipsum 

Title
Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
`;

export class Experiences extends Component<xpProps, { selectedCard: XpContentModel }> {

    componentDidMount() {
        this.setState({ selectedCard: this.props.xpContents[0] })
    }

    render(): ReactNode {

        return (
            <PageSection pageId="experiences">
                <FlexRow fullScreen={true}>
                    <div>
                        <PageTitle text='Experiences'></PageTitle>
                    </div>
                    <Flex5050>
                        <XpCardsContainer cards={this.props.xpContents.map((card) => { return { logo: card.LogoUrl, name: card.Name } })} />
                        {/* <Line></Line> */}
                        <XpContentContainer level={this.state?.selectedCard.Level} text={test} />
                    </Flex5050>
                    <div>
                        <PageLinks lastPageHref="#aboutme" nextPageHref="#contactme" links={[{ Href: "aboutme", Name: "About me" }, { Href: "contactme", Name: "Contact me" }]}></PageLinks>
                    </div>
                </FlexRow>
            </PageSection>

        )
    }


}
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import React, { Component, ReactNode } from "react";
import { Flex5050, FlexRow, PageLinks, PageSection, PageTitle, XpCardsContainer, XpContentContainer } from "@portfoliods/react"
import { ExperienceModel, LinkModel } from "@portfoliods/foundation/src/types";

import '@portfoliods/scss/src/atoms/PageTitle.scss';
import '@portfoliods/scss/src/molecules/XpCardsContainer.scss';
import '@portfoliods/scss/src/molecules/XpContentContainer.scss';
import '@portfoliods/scss/src/atoms/Line.scss';
import { Breakpoints } from "@portfoliods/foundation/src";
import i18n from "@/i18n";

export class Experiences extends Component<{ experiences: ExperienceModel[], blockScrollFunc: Function, nextPageFunc: Function, prevPageFunc: Function }, { selectedCard: ExperienceModel }> {

    componentDidMount() {
        this.setState({ selectedCard: this.props.experiences[0] })
    }

    clickCardEvent(cardName: string) {
        this.setState({
            selectedCard: this.props.experiences.find(e => e.menuIdentifier === cardName) ?? this.props.experiences[0]
        })
    }

    mountContent() {
        if (window.innerWidth <= Breakpoints.tablet) {
            return <FlexRow justify="stretch" grow={1}>
                <XpCardsContainer onclick={(cardName: string) => {
                    this.clickCardEvent(cardName)
                }} cards={this.props.experiences.map((card) => { return { logo: card.avatar, name: card.menuIdentifier } })} />
                {/* <Line></Line> */}
                <XpContentContainer blockScrollFunc={this.props.blockScrollFunc} level={this.state?.selectedCard.level} text={documentToHtmlString(this.state?.selectedCard.text)} />
            </FlexRow>
        }
        return <Flex5050>
            <XpCardsContainer onclick={(cardName: string) => {
                this.clickCardEvent(cardName)
            }} cards={this.props.experiences.map((card) => { return { logo: card.avatar, name: card.menuIdentifier } })} />
            {/* <Line></Line> */}
            <XpContentContainer blockScrollFunc={this.props.blockScrollFunc} level={this.state?.selectedCard.level} text={documentToHtmlString(this.state?.selectedCard.text)} />
        </Flex5050>
    }

    render(): ReactNode {

        return (
            <PageSection pageId="experiences">
                <FlexRow fullScreen={true} >
                    <div>
                        <PageTitle text={i18n.t("experiences")}></PageTitle>
                    </div>

                    {this.mountContent()}
                    <div>
                        <PageLinks prevPageFunc={this.props.prevPageFunc} nextPageFunc={this.props.nextPageFunc}></PageLinks>
                    </div>
                </FlexRow>
            </PageSection>

        )
    }


}
import { Component } from "react";
import { Flex5050, FlexRow, Image5050, Margin, PageLinks, PageSection, PageTitle, Subtitle } from "@portfoliods/react"
import { LinkModel } from "@portfoliods/foundation/src/types";

import '@portfoliods/scss/src/atoms/Subtitle.scss';
import '@portfoliods/scss/src/atoms/Image5050.scss';
import '@portfoliods/scss/src/atoms/PageTitle.scss';
import '@portfoliods/scss/src/molecules/PageLinks.scss';

interface aboutMeProps {
    text: string,
    links: LinkModel[]
}

export class AboutMe extends Component<aboutMeProps> {

    render() {
        return (
            <PageSection pageId="aboutme">
                <FlexRow
                    fullScreen={true}
                    children={<>
                        <div>
                            <PageTitle text='About me'></PageTitle>
                        </div>
                        <div>
                            <Margin
                                space='lg'
                                left={true}
                                right={true}
                                children={<Flex5050><Subtitle
                                    fontSize={6}
                                    text='Lorem Ipsum Lorem Ipsum
Lorem Ipsum Lorem Ipsum
Lorem Ipsum Lorem Ipsum
Lorem Ipsum Lorem Ipsum 
Lorem Ipsum'></Subtitle>
                                    <Image5050 alt="about me image" src="https://hudsonpotenciano.netlify.app/static/media/dev-vetor-intro.5c5831c40829f9bcde95.png"></Image5050>
                                </Flex5050>}></Margin>
                        </div>
                        <div>
                            <PageLinks lastPageHref="#home" nextPageHref="#experiences" links={[{ Href: "experiences", Name: "Experiences" }, { Href: "contactme", Name: "Contact me" }]}></PageLinks>
                        </div>
                    </>} />
            </PageSection>
        )
    }
}

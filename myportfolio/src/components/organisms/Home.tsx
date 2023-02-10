import { Component } from "react";
import { FlexRow, Header, PageLinks, PageSection, UserIntro } from "@portfoliods/react"
import { LinkModel, UserModel } from "@portfoliods/foundation/src/types";

import '@portfoliods/scss/src/molecules/PageLinks.scss';
import '@portfoliods/scss/src/molecules/UserIntro.scss';
import '@portfoliods/scss/src/molecules/Header.scss';

interface homeProps {
    links: LinkModel[],
    user: UserModel
}

export class Home extends Component<homeProps> {

    render() {
        return (
            <PageSection pageId="home">
                <FlexRow
                    fullScreen={true}
                    children={<>
                        <div><Header></Header></div>
                        <div>
                            <UserIntro user={this.props.user}></UserIntro>
                        </div>
                        <div>
                            <PageLinks nextPageHref="#aboutme" links={[{ Href: "#aboutme", Name: "About me" }, { Href: "#experiences", Name: "Experiences" }, { Href: "#contactme", Name: "Contact me" }]}></PageLinks>
                        </div>
                    </>} />
            </PageSection>
        )
    }
}

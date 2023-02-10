import { Component } from "react";
import { FlexRow, Header, PageLinks, PageSection, UserIntro } from "@portfoliods/react"
import { IntroModel, LinkModel, UserModel } from "@portfoliods/foundation/src/types";

import '@portfoliods/scss/src/molecules/PageLinks.scss';
import '@portfoliods/scss/src/molecules/UserIntro.scss';
import '@portfoliods/scss/src/molecules/Header.scss';

export class Home extends Component<{ user: IntroModel, links: LinkModel[] }> {

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
                            <PageLinks nextPageHref="#aboutme" links={this.props.links}></PageLinks>
                        </div>
                    </>} />
            </PageSection>
        )
    }
}

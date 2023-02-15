import { Component } from "react";
import { FlexRow, Header, PageLinks, PageSection, UserIntro } from "@portfoliods/react"
import { IntroModel } from "@portfoliods/foundation/src/types";

import '@portfoliods/scss/src/molecules/PageLinks.scss';
import '@portfoliods/scss/src/molecules/UserIntro.scss';
import '@portfoliods/scss/src/molecules/Header.scss';

export class Home extends Component<{ user: IntroModel, nextPageFunc: Function }> {

    render() {
        return (
            <PageSection pageId="home">
                <FlexRow
                    fullScreen={true}
                    children={<>
                        <Header></Header>
                        <div>
                            <UserIntro user={this.props.user}></UserIntro>
                        </div>
                        <div>
                            <PageLinks nextPageFunc={this.props.nextPageFunc}></PageLinks>
                        </div>
                    </>} />
            </PageSection>
        )
    }
}

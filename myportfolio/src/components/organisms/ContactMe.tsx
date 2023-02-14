import React, { Component } from "react";
import { Contact, Flex5050, FlexColumns, FlexRow, Margin, PageLinks, PageSection, PageTitle, Subtitle } from "@portfoliods/react"
import { ContactModel, LinkModel } from "@portfoliods/foundation/src/types";

import '@portfoliods/scss/src/atoms/Subtitle.scss';
import '@portfoliods/scss/src/atoms/PageTitle.scss';
import '@portfoliods/scss/src/atoms/Contact.scss';
import '@portfoliods/scss/src/molecules/PageLinks.scss';

interface aboutMeProps {
    visitMessage: string,
    thanksMessage: string,
    contacts: ContactModel[],
    prevPageFunc: Function,
}

export class ContactMe extends Component<aboutMeProps> {

    mountContacts() {
        let dom: React.ReactElement[] = [];
        this.props.contacts.forEach(contact => {
            dom.push(<Contact logo={contact.logo} name={contact.title} key={contact.title}></Contact>)
        });
        return dom;
    }

    mountPage() {
        if (this.props.thanksMessage) {
            return <>
                <div>
                    <PageTitle text="Contact me"></PageTitle>
                </div>
                <div>
                    <Margin bottom={true} space="xl"><Subtitle text={this.props.thanksMessage}></Subtitle></Margin>
                    <Subtitle text={this.props.visitMessage}></Subtitle>
                </div>
                <div>
                    <FlexColumns>
                        {this.mountContacts()}
                    </FlexColumns>
                </div>
                <div>
                    <PageLinks prevPageFunc={this.props.prevPageFunc}></PageLinks>
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
            <PageSection pageId="contactme">
                <FlexRow
                    fullScreen={true}
                    children={this.mountPage()} />
            </PageSection>
        )
    }
}

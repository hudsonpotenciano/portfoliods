import { LinkModel } from "@portfoliods/foundation/src/types";
import { FlexColumns, FlexRow, Link, Margin, ScrollButton } from "@portfoliods/react";
import React, { Component, ReactNode } from "react";

export class PageLinks extends Component<{ links: LinkModel[], nextPageHref?: string, lastPageHref?: string }> {

    mountLinks() {
        let dom: React.ReactElement[] = [];
        this.props.links.forEach(link => {
            dom.push(
                <Margin key={link.Name} left={true} right={true} space="sm"><Link href={link.Href} text={link.Name}></Link></Margin>
            )
        })
        return dom;
    }

    mountTopButton() {
        if (this.props.lastPageHref) {
            return <ScrollButton direction="top" href={this.props.lastPageHref}></ScrollButton>
        }
    }
    mountDownButton() {
        if (this.props.nextPageHref) {
            return <ScrollButton href={this.props.nextPageHref}></ScrollButton>
        }
    }

    render(): ReactNode {
        return (
            <FlexRow children={<>
                {/* <Margin
                    bottom={true}
                    space="sm"
                >
                    <FlexColumns>
                        {this.mountLinks()}
                    </FlexColumns>
                </Margin> */}
                <Margin
                    space="sm"
                    bottom={true}
                    children={
                        <div>
                            {this.mountTopButton()}
                            {this.mountDownButton()}
                        </div>
                    }></Margin>

            </>}></FlexRow>
        )
    }
}

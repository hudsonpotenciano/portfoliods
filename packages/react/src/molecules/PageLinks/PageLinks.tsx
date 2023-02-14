import { LinkModel } from "@portfoliods/foundation/src/types";
import { FlexColumns, FlexRow, Link, Margin, ScrollButton } from "@portfoliods/react";
import React, { Component, ReactNode } from "react";

export class PageLinks extends Component<{ nextPageFunc?: Function, prevPageFunc?: Function }> {

    // mountLinks() {
    //     let dom: React.ReactElement[] = [];
    //     this.props.links.forEach(link => {
    //         dom.push(
    //             <Margin key={link.name} left={true} right={true} space="sm"><Link href={link.href} text={link.name}></Link></Margin>
    //         )
    //     })
    //     return dom;
    // }

    mountTopButton() {
        if (this.props.prevPageFunc) {
            return <ScrollButton direction="top" onclick={this.props.prevPageFunc}></ScrollButton>
        }
    }
    mountDownButton() {
        if (this.props.nextPageFunc) {
            return <ScrollButton onclick={this.props.nextPageFunc}></ScrollButton>
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

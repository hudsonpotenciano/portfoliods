import React, { Component } from 'react'
import { Margin } from '../Margin/Margin'

export class PageSection extends Component<{ pageId: string, children: React.ReactNode }> {
    render() {
        return (
            <div id={this.props.pageId}>
                <Margin bottom={true} space={this.props.pageId !== "contactme" ? "xl" : "none"}>
                    {this.props.children}
                </Margin>
            </div>
        )
    }
}
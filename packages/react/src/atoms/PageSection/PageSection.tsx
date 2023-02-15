import React, { Component } from 'react'
import { Margin } from '../Margin/Margin'

export class PageSection extends Component<{ background?: string, pageId: string, children: React.ReactNode }> {
    render() {
        return (
            <div className='portfoliods-pagesection' style={{ background: this.props.background ?? "transparent" }} id={this.props.pageId}>
                <Margin bottom={true} space={this.props.pageId !== "contactme" ? "xl" : "none"}>
                    {this.props.children}
                </Margin>
            </div>
        )
    }
}
import React, { Component } from 'react'

import { FontSizes } from '@portfoliods/foundation/src/index'


export class Link extends Component<{ fontSize?: keyof typeof FontSizes, text: string, href: string, active?: boolean }> {
    render() {
        return (
            <a className={`portfoliods-link portfoliods-link-${this.props.fontSize ? this.props.fontSize : 3} ${this.props.active ? "portfoliods-link--active" : ''}`} href="">{this.props.text}</a>
        )
    }
}
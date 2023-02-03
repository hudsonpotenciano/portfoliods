import React, { Component } from 'react'

export class Link extends Component<{ fontSize: number, text: string, href: string, active: boolean }> {
    render() {
        return (
            <a className={`portfoliods-link portfoliods-link-3 ${this.props.active ? "portfoliods-link--active" : ''}`} href="">{this.props.text}</a>
        )
    }
}
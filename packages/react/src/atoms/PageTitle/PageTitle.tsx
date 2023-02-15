import React, { Component } from 'react'

import { FontSizes } from '@portfoliods/foundation/src/index'

export class PageTitle extends Component<{ text: string, fontSize?: keyof typeof FontSizes }> {
    render() {
        return (
            <h1 className={`portfoliods-pagetitle portfoliods-pagetitle-${this.props.fontSize ?? FontSizes[6]}`}>{this.props.text}</h1>
        )
    }
}
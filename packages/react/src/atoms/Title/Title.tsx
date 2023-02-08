import React, { Component } from 'react'

import { FontSizes } from '@portfoliods/foundation/src/index'

export class Title extends Component<{ text: string, fontSize?: keyof typeof FontSizes }> {
    render() {
        return (
            <h1 className={`portfoliods-title portfoliods-title-${this.props.fontSize ?? FontSizes[7]}`}>{this.props.text}</h1>
        )
    }
}
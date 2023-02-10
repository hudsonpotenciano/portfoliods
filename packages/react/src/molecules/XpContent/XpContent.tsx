import FontSizes from '@portfoliods/foundation/src/FontSizes'
import React, { Component } from 'react'

export class XpContent extends Component<{ text: any, fontSize?: keyof typeof FontSizes }> {
    render() {
        return (
            <div className={`portfoliods-xpcontent portfoliods-xpcontent-${this.props.fontSize ?? FontSizes[3]}`} dangerouslySetInnerHTML={{ __html: this.props.text }}></div>
        )
    }
}
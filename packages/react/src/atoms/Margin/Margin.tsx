import React, { Component } from 'react'

import { Spacing } from '@portfoliods/foundation/src/index'

export interface MarginProps {
    space?: keyof typeof Spacing
    left?: boolean,
    right?: boolean,
    top?: boolean,
    bottom?: boolean,
    children: React.ReactNode
}

export class Margin extends Component<MarginProps> {

    render() {

        let className = ``;

        if (!this.props.left && !this.props.right && !this.props.top && !this.props.bottom) {
            className = `portfoliods-margin-${this.props.space}`;
        }

        if (this.props.left) {
            className = `${className} portfoliods-margin-left-${this.props.space}`;
        }

        if (this.props.right) {
            className = `${className} portfoliods-margin-right-${this.props.space}`;
        }

        if (this.props.top) {
            className = `${className} portfoliods-margin-top-${this.props.space}`;
        }

        if (this.props.bottom) {
            className = `${className} portfoliods-margin-bottom-${this.props.space}`;
        }

        return <div className={className}>
            {this.props.children}
        </div>;
    }
}
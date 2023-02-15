import React, { Component } from 'react'

import { FontSizes } from '@portfoliods/foundation/src/index'
import { Margin } from '../Margin/Margin'

const levels = [
    "Basic",
    "Beginner",
    "Intermediary",
    "Advanced",
    "Expert",
    "Ninja",
];

export class XpLevel extends Component<{ level: number }> {
    render() {
        return (
            <div className='portfoliods-xplevel'>
                <Margin bottom={true} space={'xxs'}><div className={`portfoliods-xplevel-textlevel portfoliods-xplevel-textlevel-${FontSizes[4]}`}>{levels[this.props.level]}</div></Margin>
                <div className={`portfoliods-xplevel-bar portfoliods-xplevel-bar--${this.props.level}`}></div>
            </div>
        )
    }
}
import React, { Component } from 'react'

import { BrazilFlagIcon } from './BrazilFlagIcon';
import { EuaFlagIcon } from './EuaFlagIcon';

export class Languages extends Component {
    render() {
        return (
            <div className='portfoliods-languages'>
                <BrazilFlagIcon></BrazilFlagIcon>
                <EuaFlagIcon></EuaFlagIcon>
            </div>
        )
    }
}
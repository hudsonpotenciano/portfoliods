import { Constants } from '@portfoliods/foundation/src';
import React, { Component } from 'react'

import { BrazilFlagIcon } from './BrazilFlagIcon';
import { EuaFlagIcon } from './EuaFlagIcon';


export class Languages extends Component {
    render() {
        return (
            <div className='portfoliods-languages'>
                <button onClick={() => {
                    localStorage.setItem(Constants.LanguageKey, Constants.Languages.pt);
                    window.location.reload();

                }}><BrazilFlagIcon></BrazilFlagIcon></button>
                <button
                    onClick={() => {
                        localStorage.setItem(Constants.LanguageKey, Constants.Languages.en);
                        window.location.reload();
                    }}
                ><EuaFlagIcon></EuaFlagIcon></button>
            </div>
        )
    }
}
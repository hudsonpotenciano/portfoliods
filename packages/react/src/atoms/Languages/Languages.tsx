import { Constants } from '@portfoliods/foundation/src';
import React, { Component } from 'react'

import { BrazilFlagIcon } from './BrazilFlagIcon';
import { EuaFlagIcon } from './EuaFlagIcon';


export class Languages extends Component<{ changeLanguageFunc: Function }> {
    render() {
        return (
            <div className='portfoliods-languages'>
                <button onClick={() => {
                    const storageLang = localStorage.getItem(Constants.LanguageKey);
                    if (storageLang != Constants.Languages.pt) {
                        localStorage.setItem(Constants.LanguageKey, Constants.Languages.pt);
                        this.props.changeLanguageFunc();
                    }
                }}><BrazilFlagIcon></BrazilFlagIcon></button>
                <button
                    onClick={() => {
                        const storageLang = localStorage.getItem(Constants.LanguageKey);
                        if (storageLang != Constants.Languages.en) {
                            localStorage.setItem(Constants.LanguageKey, Constants.Languages.en);
                            this.props.changeLanguageFunc();
                        }
                    }}
                ><EuaFlagIcon></EuaFlagIcon></button>
            </div>
        )
    }
}
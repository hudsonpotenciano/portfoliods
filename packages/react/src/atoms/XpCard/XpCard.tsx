import React, { Component } from 'react'


export class XpCard extends Component<{ XpLogo: string }> {
    render() {
        return (
            <div className='portfoliods-xpcard'>
                <img src={this.props.XpLogo} alt="" />
            </div>
        )
    }
}
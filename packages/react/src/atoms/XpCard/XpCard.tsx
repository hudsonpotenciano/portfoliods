import React, { Component } from 'react'


export class XpCard extends Component<{ onclick: Function, name: string, logo: string }> {
    render() {
        return (
            <div onClick={() => {
                this.props.onclick(this.props.name)
            }} className='portfoliods-xpcard'>
                <img src={this.props.logo} alt="" />
            </div>
        )
    }
}
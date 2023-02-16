import React, { Component } from 'react'
import { Margin } from '../Margin/Margin'

export class Contact extends Component<{ link: string, name: string, logo: string }> {
    render() {
        return (
            <div onClick={() => {
                window.open(this.props.link, "_blank");
            }} key={this.props.name} className='portfoliods-contact'>
                <img src={this.props.logo} alt={this.props.name} />
                <span className='portfoliods-contact-name portfoliods-contact-name-3'>{this.props.name}</span>
            </div>
        )
    }
}
import React, { Component } from 'react'
import { Margin } from '../Margin/Margin'

export class Contact extends Component<{ name: string, logo: string }> {
    render() {
        return (
            <div key={this.props.name} className='portfoliods-contact'>
                <Margin
                    space='xs'
                    bottom={true}>
                    <img src={this.props.logo} alt={this.props.name} />
                </Margin>
                <span className='portfoliods-contact-name portfoliods-contact-name-3'>{this.props.name}</span>
            </div>
        )
    }
}
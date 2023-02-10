import React, { Component } from 'react'

export class Image5050 extends Component<{ src: string, alt: string }> {
    render() {
        return (
            <img className='portfoliods-image5050' src={this.props.src} alt={this.props.alt}></img>
        )
    }
}
import React, { Component } from 'react'

export class Image5050 extends Component<{ src: string, alt: string }> {
    render() {
        return (
            <div className='portfoliods-image5050'>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className='portfoliods-image5050-background'>
                </div>
            </div>
        )
    }
}
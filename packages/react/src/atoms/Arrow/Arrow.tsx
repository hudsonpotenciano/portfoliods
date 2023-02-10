import React, { Component } from 'react'

const directions = {
    top: "top",
    down: "down",
}

export class Arrow extends Component<{ direction?: keyof typeof directions }> {
    render() {
        return (
            <div className={`portfoliods-arrow portfoliods-arrow--${this.props.direction ?? "down"}`}>
                <svg width="39" height="45" viewBox="0 0 39 45" xmlns="http://www.w3.org/2000/svg">
                    <rect id='border' x="1.5" y="1.5" width="36" height="42" strokeWidth="3" />
                    <path id='arrow' d="M18.9393 36.0607C19.5251 36.6464 20.4749 36.6464 21.0607 36.0607L30.6066 26.5147C31.1924 25.9289 31.1924 24.9792 30.6066 24.3934C30.0208 23.8076 29.0711 23.8076 28.4853 24.3934L20 32.8787L11.5147 24.3934C10.9289 23.8076 9.97918 23.8076 9.3934 24.3934C8.80761 24.9792 8.80761 25.9289 9.3934 26.5147L18.9393 36.0607ZM18.5 11V35H21.5V11H18.5Z" />
                </svg>
            </div>
        )
    }
}
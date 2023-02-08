import React, { Component } from 'react'

const directions = {
    top: "top",
    down: "down",
}

export class Arrow extends Component<{ direction?: keyof typeof directions }> {
    render() {
        return (
            <div className={`portfoliods-arrow portfoliods-arrow--${this.props.direction ?? "down"}`}>
                <svg width="24" height="50" viewBox="0 0 24 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9393 49.0607C11.5251 49.6464 12.4749 49.6464 13.0607 49.0607L22.6066 39.5147C23.1924 38.9289 23.1924 37.9792 22.6066 37.3934C22.0208 36.8076 21.0711 36.8076 20.4853 37.3934L12 45.8787L3.51472 37.3934C2.92893 36.8076 1.97918 36.8076 1.3934 37.3934C0.807612 37.9792 0.807612 38.9289 1.3934 39.5147L10.9393 49.0607ZM10.5 0L10.5 48H13.5L13.5 0L10.5 0Z" fill="white" />
                </svg>
            </div>
        )
    }
}
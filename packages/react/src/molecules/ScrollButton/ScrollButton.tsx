import React, { Component } from 'react'
import { Arrow } from "../../atoms/Arrow/Arrow"

const directions = {
    top: "top",
    down: "down",
}

export class ScrollButton extends Component<{ direction?: keyof typeof directions }> {
    render() {
        return (
            <button className='portfoliods-scrollbutton'>
                <Arrow direction={this.props.direction}></Arrow>
            </button>
        )
    }
}
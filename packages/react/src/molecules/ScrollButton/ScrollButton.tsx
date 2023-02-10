import React, { Component } from 'react'
import { Arrow } from "../../atoms/Arrow/Arrow"

const directions = {
    top: "top",
    down: "down",
}

export class ScrollButton extends Component<{ direction?: keyof typeof directions, href: string }> {
    render() {
        return (
            <button className='portfoliods-scrollbutton' onClick={(e) => {
                e.preventDefault(); window.location.href = this.props.href ?? ""
            }}>
                <Arrow direction={this.props.direction}></Arrow>
            </button>
        )
    }
}
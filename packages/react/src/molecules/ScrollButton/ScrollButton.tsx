import React, { Component } from 'react'
import { Arrow } from "../../atoms/Arrow/Arrow"

const directions = {
    top: "top",
    down: "down",
}

export class ScrollButton extends Component<{ direction?: keyof typeof directions, onclick?: Function }> {
    render() {
        return (
            <button data-testid="scrollbutton-test" className='portfoliods-scrollbutton' onClick={(e) => {
                e.preventDefault();
                if (this.props.onclick) {
                    this.props.onclick();
                }
            }}>
                <Arrow direction={this.props.direction}></Arrow>
            </button>
        )
    }
}
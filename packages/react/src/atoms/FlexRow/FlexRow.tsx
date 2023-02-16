import React, { Component } from 'react'

const align = {
    center: "center",
    start: "flex-start",
    end: "flex-end",
}

const justify = {
    spaceBetween: "space-between",
    center: "center",
    stretch: "stretch",
}

export class FlexRow extends Component<{
    fullScreen?: Boolean, children: React.ReactNode,
    align?: keyof typeof align,
    justify?: keyof typeof justify,
    grow?: number
}> {
    render() {
        return (
            <div
                style={{
                    justifyContent: this.props.justify ? this.props.justify : justify["spaceBetween"],
                    flexGrow: this.props.grow ? this.props.grow : 0,
                }}
                className={`portfoliods-flexrow portfoliods-flexrow-${this.props.align ? this.props.align : align["center"]}             
            ${this.props.fullScreen ? 'portfoliods-flexrow--fullscreen' : ''}`}>
                {this.props.children}
            </div>
        )
    }
}
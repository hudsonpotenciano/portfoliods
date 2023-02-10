import React, { Component } from 'react'

const align = {
    center: "center",
    start: "flex-start",
    end: "flex-end",
}

export class FlexRow extends Component<{ fullScreen?: Boolean, children: React.ReactNode, align?: keyof typeof align }> {
    render() {
        return (
            <div className={`portfoliods-flexrow portfoliods-flexrow-${this.props.align ? this.props.align : align["center"]} ${this.props.fullScreen ? 'portfoliods-flexrow--fullscreen' : ''}`}>
                {this.props.children}
            </div>
        )
    }
}
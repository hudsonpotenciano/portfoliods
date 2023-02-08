import React, { Component } from 'react'

export class FlexRow extends Component<{ fullScreen?: Boolean, childrens: React.ReactNode }> {
    render() {
        return (
            <div className={`portfoliods-flexrow ${this.props.fullScreen ? 'portfoliods-flexrow--fullscreen' : ''}`}>
                {this.props.childrens}
            </div>
        )
    }
}
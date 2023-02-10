import React, { Component } from 'react'

export class FlexColumns extends Component<{ children: React.ReactNode }> {
    render() {
        return (
            <div className='portfoliods-flexcolumns'>
                {this.props.children}
            </div>
        )
    }
}
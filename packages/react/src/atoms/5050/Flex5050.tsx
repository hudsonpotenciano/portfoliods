import React, { Component } from 'react'

export class Flex5050 extends Component<{ children: React.ReactNode }> {
    render() {
        return (
            <div className='portfoliods-flex5050'>
                {this.props.children}
            </div>
        )
    }
}
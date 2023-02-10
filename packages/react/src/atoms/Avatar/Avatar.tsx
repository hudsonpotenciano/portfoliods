import React, { Component } from 'react'

export class Avatar extends Component<{ url: string }> {
    render() {
        return (
            <div className='portfoliods-avatar'>
                <img
                    className='portfoliods-avatar-image'
                    src={this.props.url} />
            </div>
        )
    }
}
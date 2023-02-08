import React, { Component } from 'react'

export class Avatar extends Component {
    render() {
        return (
            <div className='portfoliods-avatar'>
                <img
                    className='portfoliods-avatar-image'
                    src={require("../../assets/images/avatar.png")}
                    alt="Hudson Potenciano photo" />
            </div>
        )
    }
}
import React, { Component } from 'react'
import { Languages } from '../../atoms/Languages/Languages'
import { ThemeControl } from '../../atoms/ThemeControl/ThemeControl'

export class Header extends Component {
    render() {
        return (
            <div className='portfoliods-header'>
                <Languages></Languages>
                <ThemeControl></ThemeControl>
            </div>
        )
    }
}
import React, { useImperativeHandle } from 'react'
import { Languages } from '../../atoms/Languages/Languages'
import { ThemeControl } from '../../atoms/ThemeControl/ThemeControl'

export const Header = React.forwardRef((props, ref: any) => {

    useImperativeHandle(ref, () => ({
        hideOrShowHeader(show: boolean) {
            const header = document.getElementById("portfoliods-header");
            if (header && show) {
                header.classList.remove("hide")
            } else if (header) {
                header.classList.add("hide")
            }
        }
    }))

    return (
        <header ref={ref} className='portfoliods-header' id='portfoliods-header'>
            <Languages></Languages>
            <ThemeControl></ThemeControl>
        </header>
    )
})
import { Aligns, Breakpoints } from '@portfoliods/foundation/src';
import FontSizes from '@portfoliods/foundation/src/FontSizes'
import React, { Component } from 'react'

export class XpContent extends Component<{ align?: keyof typeof Aligns, text: any, fontSize?: keyof typeof FontSizes, blockScrollFunc?: Function }> {

    componentDidUpdate() {

        document.querySelectorAll(".portfoliods-xpcontent a").forEach((anchor) => {
            if (!anchor.hasAttribute("target")) {
                anchor.setAttribute("target", "_blank");
            }
        })
    }

    render() {
        return (
            <div
                onMouseEnter={() => {

                    if (this.props.blockScrollFunc && window.innerWidth > Breakpoints.phone) {
                        this.props.blockScrollFunc(true);
                    }
                }}
                onMouseLeave={() => {
                    if (this.props.blockScrollFunc && window.innerWidth > Breakpoints.phone) {
                        this.props.blockScrollFunc(false);
                    }
                }}
                style={{ textAlign: this.props.align ? this.props.align : "center" }}
                className={`portfoliods-xpcontent portfoliods-xpcontent-${this.props.fontSize ?? FontSizes[3]}`} dangerouslySetInnerHTML={{ __html: this.props.text }}></div>
        )
    }
}
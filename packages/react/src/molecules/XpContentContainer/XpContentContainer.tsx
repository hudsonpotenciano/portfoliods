import { FlexRow, Margin, XpContent, XpLevel } from '@portfoliods/react'
import React, { Component } from 'react'

export class XpContentContainer extends Component<{ level: number, text: any, blockScrollFunc?: Function }> {
    render() {
        return (
            <div className='portfoliods-xpcontentcontainer'>
                <FlexRow align='start'>
                    <XpLevel level={this.props.level}></XpLevel>
                    <XpContent align='left' blockScrollFunc={this.props.blockScrollFunc} text={this.props.text}></XpContent>
                </FlexRow>
            </div>
        )
    }
}
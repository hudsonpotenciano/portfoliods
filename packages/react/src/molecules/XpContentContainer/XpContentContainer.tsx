import { FlexRow, Margin, XpContent, XpLevel } from '@portfoliods/react'
import React, { Component } from 'react'

export class XpContentContainer extends Component<{ level: number, text: any }> {
    render() {
        return (
            <div className='portfoliods-xpcontentcontainer'>
                <FlexRow align='start'>
                    <XpLevel level={this.props.level}></XpLevel>
                    <Margin top={true} space='sm'>
                        <XpContent text={this.props.text}></XpContent>
                    </Margin>

                </FlexRow>
            </div>
        )
    }
}
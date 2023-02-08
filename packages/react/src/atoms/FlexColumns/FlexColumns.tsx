import React, { Component } from 'react'

export class FlexColumns extends Component<{ childrens: React.ReactNode }> {
    render() {
        return (
            <div className='portfoliods-flexcolumns'>
                {this.props.childrens}
            </div>
        )
    }
}
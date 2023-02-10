import { Avatar, Margin, Subtitle, Title } from "@portfoliods/react";

import React, { Component, ReactNode } from "react";
import { IntroModel } from "@portfoliods/foundation/src/types";

export class UserIntro extends Component<{ user: IntroModel }> {
    render(): ReactNode {
        return (<>
            <Margin space="sm" bottom={true}><Avatar url={this.props.user.avatar}></Avatar></Margin>
            <Title text={this.props.user.name}></Title>
            <Subtitle fontSize={6} text={this.props.user.title}></Subtitle></>)
    }
}

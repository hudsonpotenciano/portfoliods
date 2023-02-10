import { Avatar, Margin, Subtitle, Title } from "@portfoliods/react";

import React, { Component, ReactNode } from "react";
import { UserModel } from "@portfoliods/foundation/src/types";

export class UserIntro extends Component<{ user: UserModel }> {
    render(): ReactNode {
        return (<>
            <Margin space="sm" bottom={true}><Avatar url={this.props.user.AvatarUrl}></Avatar></Margin>
            <Title text={this.props.user.Name}></Title>
            <Subtitle fontSize={6} text={this.props.user.Subtitle}></Subtitle></>)
    }
}

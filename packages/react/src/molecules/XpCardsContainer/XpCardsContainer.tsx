import React, { Component } from 'react'
import { XpCard } from '../../atoms/XpCard/XpCard';

export class XpCardsContainer extends Component<{ onclick: Function, cards: { logo: string, name: string }[] }> {

    mountCards() {
        let dom: React.ReactElement[] = [];
        this.props.cards.forEach(card => {
            dom.push(<XpCard onclick={this.props.onclick} name={card.name} key={card.name} logo={card.logo}></XpCard>)
        });
        return dom;
    }

    render() {
        return (
            <div className='portfoliods-xpcardscontainer'>
                {this.mountCards()}
            </div>
        )
    }
}
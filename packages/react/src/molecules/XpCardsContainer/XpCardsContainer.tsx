import React, { Component } from 'react'
import { XpCard } from '../../atoms/XpCard/XpCard';

export class XpCardsContainer extends Component<{ cards: { logo: string, name: string }[] }> {

    mountCards() {
        let dom: React.ReactElement[] = [];
        this.props.cards.forEach(card => {
            dom.push(<XpCard key={card.name} XpLogo={card.logo}></XpCard>)
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
import React, { Component } from 'react';
import CardInst from './CardInst';

class CardStacks extends Component {
    render() {
        let cards = this.props.cards;
        let clickED1 = this.props.clickED1;
        let clickED2 = this.props.clickED2;
        let matchED = this.props.matchED;
        const cardLiArray = cards.map((cardType, i) => {
            return (<CardInst cardType={cardType} key={i} keyNum={i}
                              clickED={i == clickED1 || i == clickED2 ? true : false}
                              matchED={matchED.includes(i) ? true : false}
                              alertRed={this.props.alertRed}
                              cardPress={this.props.cardPress}
            />)
        });
        return (<ul className="deck">{cardLiArray}</ul>);
    }
}

export default CardStacks;
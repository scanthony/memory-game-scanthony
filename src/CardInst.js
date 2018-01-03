import React, { Component } from 'react';

class CardInst extends Component {
    render() {
        //console.log(this.props.keyNum);
        return (<li
                    cardType={this.props.cardType}
                    keyNum={this.props.keyNum}
                    className={`card ${this.props.clickED ? (this.props.alertRed ? 'alertred' : 'open show') : ''} ${this.props.matchED ? 'match' : ''}`}
                    onClick={this.props.cardPress}
                >
                    <i className={`fa ${this.props.cardType}`}></i>
            </li>);
    }
}

export default CardInst;
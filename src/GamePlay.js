import React, { Component } from 'react';
import ShowInfo from './ShowInfo';
import CardStacks from './CardStacks';

class GamePlay extends Component {
	//Game plalying interface
	//Two parts: Infomation bar and the card playing board.
    render() {
        return (<div>
            <ShowInfo
                movesTotal={this.props.gameInfo.movesTotal}
                reStartGame={this.props.reStartGame}
                secCount={this.props.gameInfo.secCount}
            />
            <CardStacks
                cards={this.props.gameInfo.cards}
                clickED1={this.props.gameInfo.clickED1}
                clickED2={this.props.gameInfo.clickED2}
                matchED={this.props.gameInfo.matchED}
                alertRed={this.props.gameInfo.alertRed}
                cardPress={this.props.cardPress}
            />
        </div>);
    }
}

export default GamePlay;
import React, { Component } from 'react';
import WinProp from './WinProp';
import GamePlay from './GamePlay';

class Game extends Component {
    constructor(props) {
        super(props);
        this.reStartGame = this.reStartGame.bind(this);
        this.cardPress = this.cardPress.bind(this);
        let randCardsRes = this.randCards();
        this.state = {
            cards: randCardsRes,
            clickED1: -1, // -1 means no card is being clicked. Otherwise the value will be the 'keyNum' of the clicked card.
            clickED2: -1,
            lastCardType: '',
            matchED: [], // An arrary of clicked cards' keyNum value 
            movesTotal: 0, //Used to generate star grading
            wonGame: false,
            alertRed: false,
            running: false, // This value is used to avoid two 'cardPress()' functions running at the same time
            secCount: 0
        };

        setInterval(() => {
            if (!this.state.wonGame) this.setState({secCount: this.state.secCount + 1});
        }, 1000)
    }

    cardPress(evt) {
		// this function control the logics of the game 
		
        if (this.state.running) return false;
        this.setState({running: true});
		
        let cardType = evt.target.getAttribute('cardType');
        let keyNumPress = evt.target.getAttribute('keyNum');
		
        if (this.state.clickED1 === -1) { // when the first card is being clicked
            this.setState({clickED1: parseInt(keyNumPress), lastCardType: cardType});
        } else if (this.state.clickED2 === -1 && this.state.clickED1 !== keyNumPress) { // when the 2nd card is being clicked
            this.setState({clickED2: parseInt(keyNumPress)});
            if (cardType == this.state.lastCardType) {
                let matchEDNew = this.state.matchED;
                setTimeout(() => {
                    matchEDNew.push(this.state.clickED1);
                    matchEDNew.push(this.state.clickED2);
                    console.log(matchEDNew);
                    this.setState({
                        clickED1: -1,
                        clickED2: -1,
                        matchED: matchEDNew,
                        lastCardType: cardType
                    });
                }, 1700);

                setTimeout(() => {
                    if (this.state.matchED.length ===16) {
                        this.setState({wonGame: true});
                    }
                }, 2300)

            } else {
                setTimeout(() => {
                    if (this.state.clickED1 !==-1 && this.state.clickED1 !== keyNumPress) this.setState({alertRed: true});
                }, 110);

                setTimeout(() => {
                        this.setState({
                            clickED1: -1,
                            clickED2: -1,
                            lastCardType: cardType,
                            movesTotal: this.state.movesTotal + 1,
                            alertRed: false
                        })
                    }, 1800
                )
            }
        }
        this.setState({running: false});

    }

    reStartGame() {
        let randCardsRes = this.randCards();
        this.setState({
            cards: randCardsRes,
            clickED1: -1,
            clickED2: -1,
            lastCardType: '',
            matchED: [],
            movesTotal: 0,
            wonGame: false,
            alertRed: false,
            running: false,
            secCount: 0
        });
    }

    randCards() { // Used for generating random array of cards
        let fullCards = [
                "fa-diamond", "fa-diamond",
                "fa-paper-plane-o", "fa-paper-plane-o",
                "fa-anchor", "fa-anchor",
                "fa-bolt", "fa-bolt",
                "fa-cube", "fa-cube",
                "fa-leaf", "fa-leaf",
                "fa-bicycle", "fa-bicycle",
                "fa-bomb", "fa-bomb",
            ];

        fullCards.sort((a, b) => (0.5 - Math.random()));
        fullCards.sort((a, b) => (0.5 - Math.random()));

        return fullCards;
    }

    render() {
        if (this.state.wonGame) {
			//This component return 2 versions of User Interface
			//This one is the interface when the player have won the game.
            return (<div className="container"><WinProp reStartGame={this.reStartGame} movesTotal={this.state.movesTotal} /></div>);
        } else {
			//This one is when he/she is playing the game.
            return (<div className="container">
                <GamePlay gameInfo={this.state}
                          reStartGame={this.reStartGame}
                          cardPress={this.cardPress}
                />
            </div>);
        }
    }
}

export default Game;
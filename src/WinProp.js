import React, { Component } from 'react';
import BtnRePlay from './BtnRePlay';

class WinProp extends Component {
    render() {
        let stars = -1;
        if (this.props.movesTotal <= 5) stars = 3;
        if (this.props.movesTotal > 5 && this.props.movesTotal <= 10) stars = 2;
        if (this.props.movesTotal > 10 && this.props.movesTotal <= 20) stars = 1;
        if (this.props.movesTotal > 20) stars = 0;
        return (
            <div className="win-splash">
                <h1>Congrats, You've Won the Game with Grade {stars}! </h1>
                <h2>{this.props.secCount} secondes passed in total! </h2>
            <BtnRePlay reStartGame={this.props.reStartGame} />
            </div>
        );
    }
}

export default WinProp;

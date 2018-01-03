import React, { Component } from 'react';
import BtnRePlay from './BtnRePlay';

class ShowInfo extends Component {
    render() {
        let stars = -1;
        if (this.props.movesTotal <= 5) stars = 3;
        if (this.props.movesTotal > 5 && this.props.movesTotal <= 10) stars = 2;
        if (this.props.movesTotal > 10 && this.props.movesTotal <= 20) stars = 1;
        if (this.props.movesTotal > 20) stars = 0;

        return (<section className="score-panel">
                    <span>Grade <span className="moves">{stars}</span></span>;
                    <BtnRePlay reStartGame={this.props.reStartGame} />
                    <br />
                    <span>{this.props.secCount} secondes passed! Hurry up!</span>
            </section>);
    }
}

export default ShowInfo;
import React, { Component } from 'react';

// A Replay Button
class BtnRePlay extends Component {
    render() {
        return (
            <div className="restart">
                <i className="fa fa-repeat" onClick={this.props.reStartGame}></i>
            </div>
        );
    }
}

export default BtnRePlay;
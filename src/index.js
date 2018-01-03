import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import './game.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game />, document.getElementById('game-react'));
registerServiceWorker();

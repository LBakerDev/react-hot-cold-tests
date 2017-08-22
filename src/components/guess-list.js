import React from 'react';
import {connect} from 'react-redux';

import './guess-list.css';

const GuessList = function(props) {
    const guesses = props.guesses.map((guess, index) => (
        <li key={index}>
            {guess}
        </li>
    ));

    return (
        <ul id="guessList" className="guessBox clearfix">
            {guesses}
        </ul>
    );
};

const mapStatetoProps = state => ({
    guesses: state.guesses
});
export default connect(mapStatetoProps)(GuessList);
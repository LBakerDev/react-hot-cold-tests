import React from 'react';
import{shallow} from 'enzyme';
import GuessCount from '../guess-count.js';


it('Renders without crashing', () => {
    shallow(<GuessCount/>);


});

it('Displays the number user guessed', () => {
    let guessCount = 8;
    let expecting = 'Guess #' + guessCount + '!';
    const wrapper = shallow(<GuessCount count={guessCount} />);
    expect(wrapper.text()).toEqual(expecting);
})
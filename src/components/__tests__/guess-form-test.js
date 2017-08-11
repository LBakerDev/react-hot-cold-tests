import React from 'react';
import{shallow, mount} from 'enzyme';
import GuessForm from '../guess-form.js';



it('Renders without crashing', () => {
    shallow(<guessForm/>);
});

it('Submits the form', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onGuess={callback} />);
    const value = 8;
    wrapper.find('input[type="text"]').node.value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value.toString());
});

it('Should reset the input when the form is submitted', () => {
    const wrapper = mount(<GuessForm />);
    const input = wrapper.find('input[type="text"]');
    input.node.value =  10;
    wrappers.simulate('submit');
    expect(input.node.value).toEqual('');
});
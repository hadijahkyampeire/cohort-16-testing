import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from 'enzyme';

import AddInputs from './addInput';

configure({ adapter: new Adapter() });

describe('Add input component', () => {
  const addInput = shallow(<AddInputs />);
  it('renders properly', () => {
    expect(addInput).toMatchSnapshot();
  });
  it('handles input changes and changes state', () => {
    addInput
      .find('input')
      .at(1)
      .simulate('change', { target: { name: 'number1', value: 2 } });
    const state = addInput.state();
    expect(state.number1).toEqual(2);
  });
  it('displays the text in state when the display button is called', () => {
    addInput.setState({ number1: 3, number2: 4 });
    addInput.find('.btn-success').simulate('click');
    const state = addInput.state();
    expect(state.sum).toEqual(7);
  });
});

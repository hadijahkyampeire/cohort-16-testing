import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from 'enzyme';

import TextInput from './textInput';

configure({ adapter: new Adapter() });

describe('Add input component', () => {
  const textInput = shallow(<TextInput />);
  it('renders properly', () => {
    expect(textInput).toMatchSnapshot();
  });

  it('handles input changes and changes state', () => {
    textInput.find('input').simulate('change', { target: { name: 'text', value: 'test' } });
    const state = textInput.state();
    expect(state.text).toEqual('test');
  });
  it('displays the text in state when the display button is called', () => {
    textInput.setState({ text: 'new text' });
    textInput.find('.btn-primary').simulate('click');
    const state = textInput.state();
    expect(state.result).toEqual('new text');
  });
});

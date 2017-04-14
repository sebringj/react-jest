import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow, render } from 'enzyme';
// shallow is for immediate children dom, no more
// mount is deep rendering
// render is for pure output
import sinon from 'sinon';
import App from '../App';

describe('<App />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('changes Link text', () => {
    const wrapper = mount(<App />);
    const link = wrapper.find('a');

    // initial condition
    expect(link.text()).toBe('Not Clicked');

    // modified condition
    link.simulate('click');
    expect(link.text()).toBe('Clicked');
  });

  it('changes checkbox label', () => {
    const wrapper = mount(<App />);
    const input = wrapper.find('input');
    const label = wrapper.find('label');

    expect(label.text()).toEqual('Off');

    input.simulate('change');

    expect(label.text()).toEqual('On');
  });

});

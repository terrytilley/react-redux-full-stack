import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import About from './About';

describe('<About />', () => {
  it('should render component', () => {
    const wrapper = shallow(<About />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

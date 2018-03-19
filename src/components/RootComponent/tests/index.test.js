import React from 'react';
import { shallow } from 'enzyme';
import RootComponent from '../';

describe('RootComponent', () => {
  const wrapper = shallow(<RootComponent />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders `RootComponent` children', () => {
    expect(wrapper.find('.RootComponent').children().length).toEqual(1);
  });
});

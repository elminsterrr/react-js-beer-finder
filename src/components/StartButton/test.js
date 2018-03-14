import React from 'react';
import { shallow } from 'enzyme';
import StartButton from './';

describe('StartButton', () => {
  const wrapper = shallow(<StartButton />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders `StartButton-container` children correctly', () => {
    expect(wrapper.find('.StartButton-container').children().length).toEqual(1);
  });

  it('changes `state().startWasClicked` to `true` when clicking the `Start Here` button', () => {
    wrapper.find('.StartButton-main').simulate('click');

    expect(wrapper.state().startWasClicked).toBeTruthy();
  });
});

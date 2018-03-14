import React from 'react';
import { shallow } from 'enzyme';
import StartButton from '../';

describe('StartButton', () => {
  const wrapper = shallow(<StartButton />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('when clicking `Start Here` button', () => {
    wrapper.find('.StartButton-main').simulate('click');

    it('changes `state().startWasClicked` to `true`', () => {
      expect(wrapper.state().startWasClicked).toBeTruthy();
    });

    it('hides `Start Here` button', () => {
      expect(wrapper.find('.StartButton-container').children().length).toEqual(
        0
      );
    });
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import StartApp from '../';

describe('StartApp', () => {
  const startApp = shallow(<StartApp />);

  it('renders correctly', () => {
    expect(startApp).toMatchSnapshot();
  });

  describe('when clicking `Start Here` button', () => {
    startApp.find('.StartApp-main').simulate('click');

    it('changes `state().startWasClicked` to `true`', () => {
      expect(startApp.state().startWasClicked).toBeTruthy();
    });

    it('hides `Start Here` button', () => {
      expect(startApp.find('.StartApp-container').children().length).toEqual(0);
    });
  });
});

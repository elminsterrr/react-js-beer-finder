import React from 'react';
import { shallow } from 'enzyme';
import ProgressIndicator from '../';

describe('ProgressIndicator', () => {
  const wrapper = shallow(<ProgressIndicator />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders `CircularProgress` indicator', () => {
    expect(
      wrapper.find('.ProgressIndicator-container').children().length
    ).toEqual(1);
  });
});

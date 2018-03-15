import React from 'react';
import { shallow } from 'enzyme';
import ProgressIndicator from '../';

describe('ProgressIndicator', () => {
  const progressInd = shallow(<ProgressIndicator />);

  it('renders correctly', () => {
    expect(progressInd).toMatchSnapshot();
  });

  it('renders `CircularProgress` indicator', () => {
    expect(
      progressInd.find('.ProgressIndicator-circular-progress').children().length
    ).toEqual(1);
  });
});

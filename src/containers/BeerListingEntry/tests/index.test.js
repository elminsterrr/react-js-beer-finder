import React from 'react';
import { shallow } from 'enzyme';
import BeerListingEntry from '../';

describe('BeerListingEntry', () => {
  const beerListingEntry = shallow(<BeerListingEntry />);

  it('renders correctly', () => {
    expect(beerListingEntry).toMatchSnapshot();
  });
});

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { shallow } from 'enzyme';
import reducers from '../../../reducers';

import BeerListingEntry from '../';

const store = createStore(reducers);

describe('BeerListingEntry', () => {
  const beerListingEntry = shallow(
    <Provider store={store}>
      <BeerListingEntry />
    </Provider>
  );

  it('renders correctly', () => {
    expect(beerListingEntry).toMatchSnapshot();
  });
});

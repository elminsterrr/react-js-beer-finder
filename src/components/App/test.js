import React from 'react';
import { shallow } from 'enzyme';
import App from './';

describe('App', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('renders `App-start-button` children', () => {
    expect(app.find('.App-start-button').children().length).toEqual(1);
  });
});

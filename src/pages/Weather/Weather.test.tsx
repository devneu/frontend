import React from 'react';
import render from 'react-test-renderer';
import Weather from './Weather';

describe('Weather', () => {
  it('Should successfully render', () => {
    const wrapper = render.create(<Weather />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import SearchWidget from './SearchWidget';

describe('SearchWidget', () => {
  it('Should successfully render', () => {
    const wrapper = renderer.create(<SearchWidget />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

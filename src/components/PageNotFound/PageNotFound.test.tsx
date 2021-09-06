import React from 'react';
import renderer from 'react-test-renderer';
import PageNotFound from './PageNotFound';

describe('PageNotFound', () => {
  it('Should successfully render', () => {
    const wrapper = renderer.create(<PageNotFound />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

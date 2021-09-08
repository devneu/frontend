import React from 'react';
import renderer from 'react-test-renderer';
import CategoriesWidget from './CategoriesWidget';

describe('CategoriesWidget', () => {
  it('Should successfully render', () => {
    const wrapper = renderer.create(<CategoriesWidget />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

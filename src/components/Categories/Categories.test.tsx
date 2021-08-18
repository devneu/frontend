import React from 'react';
import renderer from 'react-test-renderer';
import CategoriesWidget from './Categories';

describe('CategoriesWidget', () => {
  it('Should successfully render', () => {
    const wrapper = renderer.create(<CategoriesWidget />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import SideWidget from './Side';

describe('SideWidget', () => {
  it('Should successfully render', () => {
    const wrapper = renderer.create(<SideWidget />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import SideWidget from './SideWidget';

describe('SideWidget', () => {
  it('Should successfully render', () => {
    const wrapper = renderer.create(<SideWidget />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

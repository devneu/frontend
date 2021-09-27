import React from 'react';
import renderer from 'react-test-renderer';
import ChatSlider from './ChatSlider';
import { slides } from '../../mock/mockChat';

describe('ChatSlider', () => {
  it('Should successfully render', () => {
    const wrapper = renderer.create(<ChatSlider slides={slides} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

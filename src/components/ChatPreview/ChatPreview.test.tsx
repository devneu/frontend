import React from 'react';
import renderer from 'react-test-renderer';
import ChatPreview from './ChatPreview';

describe('ChatPreview', () => {
  it('Should successfully render', () => {
    const wrapper = renderer.create(<ChatPreview />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

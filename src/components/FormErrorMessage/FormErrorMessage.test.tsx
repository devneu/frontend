import React from 'react';
import renderer from 'react-test-renderer';
import FormErrorMessage from './FormErrorMessage';

describe('FormErrorMessage', () => {
  it('Should successfully render', () => {
    const wrapper = renderer.create(<FormErrorMessage message="Message error" />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

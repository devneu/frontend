import React from 'react';
import renderer from 'react-test-renderer';
import ForgotPassword from './ForgotPassword';

describe('ForgotPassword', () => {
  it('Should successfully render', () => {
    const wrapper = renderer.create(<ForgotPassword />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

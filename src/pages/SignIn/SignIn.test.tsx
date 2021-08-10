import renderer from 'react-test-renderer';
import React from 'react';
import SignIn from './SignIn';

jest.mock('react-facebook-login', () => () => 'MockFacebookLogin');

describe('SignIn', () => {
  it('Should successfully render', () => {
    const wrapper = renderer.create(<SignIn />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

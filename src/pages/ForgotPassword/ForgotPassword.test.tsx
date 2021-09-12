import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ForgotPassword from './ForgotPassword';

describe('ForgotPassword', () => {
  it('Should successfully render', () => {
    const wrapper = renderer
      .create(
        <BrowserRouter>
          <ForgotPassword />
        </BrowserRouter>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

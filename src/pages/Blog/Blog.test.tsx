import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Blog from './Blog';

describe('Blog', () => {
  it('Should successfully render', () => {
    const wrapper = renderer
      .create(
        <BrowserRouter>
          <Blog />
        </BrowserRouter>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

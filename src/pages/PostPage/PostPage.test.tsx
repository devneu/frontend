import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import ReactRouter from 'react-router';
import PostPage from './PostPage';

jest.mock('react-markdown', () => () => 'MockReactMarkDown');

describe('PostPage', () => {
  it('Should successfully render', () => {
    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({});
    jest.spyOn(ReactRouter, 'useHistory').mockReturnValue({ push: jest.fn() } as any);
    const wrapper = renderer
      .create(
        <BrowserRouter>
          <PostPage />
        </BrowserRouter>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

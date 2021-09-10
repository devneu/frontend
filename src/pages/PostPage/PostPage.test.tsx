import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import ReactRouter from 'react-router';
import PostPage from './PostPage';

jest.mock('react-markdown', () => () => 'MockReactMarkDown');

describe('PostPage', () => {
  let useParamsSpy: jest.SpyInstance;
  let useHistorySpy: jest.SpyInstance;

  beforeEach(() => {
    useParamsSpy = jest.spyOn(ReactRouter, 'useParams').mockReturnValue({});
    useHistorySpy = jest.spyOn(ReactRouter, 'useHistory').mockReturnValue({ push: jest.fn() } as any);
  });

  afterEach(() => {
    useParamsSpy?.mockRestore();
    useHistorySpy?.mockRestore();
  });

  it('Should successfully render', () => {
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

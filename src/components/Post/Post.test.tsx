import React from 'react';
import renderer from 'react-test-renderer';
import ReactRouter from 'react-router';
import Post from './Post';

jest.mock('react-markdown', () => () => 'MockReactMarkDown');

describe('Post', () => {
  let useParamsSpy: jest.SpyInstance;
  let useHistorySpy: jest.SpyInstance;
  const pushMock = jest.fn();

  beforeEach(() => {
    useParamsSpy = jest.spyOn(ReactRouter, 'useParams');
    useHistorySpy = jest.spyOn(ReactRouter, 'useHistory').mockReturnValue({ push: pushMock } as any);
  });

  afterEach(() => {
    useParamsSpy?.mockRestore();
    useHistorySpy?.mockRestore();
  });

  it('Should successfully render', () => {
    useParamsSpy.mockReturnValue({ postId: '1' });
    const wrapper = renderer.create(<Post />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('Should redirect to "not found" page', () => {
    useParamsSpy.mockReturnValue({ postId: null });
    renderer.create(<Post />).toJSON();
    expect(pushMock).toBeCalledWith('/page-not-found');
  });
});

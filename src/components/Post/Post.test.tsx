import React from 'react';
import renderer from 'react-test-renderer';
import ReactRouter from 'react-router';
import Post from './Post';

jest.mock('react-markdown', () => () => 'MockReactMarkDown');

describe('Post', () => {
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
    const wrapper = renderer.create(<Post />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

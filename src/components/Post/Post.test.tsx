import React from 'react';
import renderer from 'react-test-renderer';
import ReactRouter from 'react-router';
import Post from './Post';

jest.mock('react-markdown', () => () => 'MockReactMarkDown');

describe('Post', () => {
  it('Should successfully render', () => {
    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ postId: '1' });
    jest.spyOn(ReactRouter, 'useHistory').mockReturnValue({ push: jest.fn() } as any);
    const wrapper = renderer.create(<Post />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

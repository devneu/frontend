import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import PostCardList from './PostCardList';
import { createMockPost, createMockPosts } from '../../mock/mockPost';

describe('PostCardList', () => {
  it('Should successfully render', () => {
    const wrapper = renderer
      .create(
        <BrowserRouter>
          <PostCardList posts={createMockPosts()} featurePost={createMockPost()} />
        </BrowserRouter>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

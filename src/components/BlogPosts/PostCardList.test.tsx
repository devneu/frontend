import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import PostCardList from './PostCardList';
import { mockTestPost } from './TestMockPost/mockTestPost';

describe('PostCardList', () => {
  it('Should successfully render', () => {
    const wrapper = renderer
      .create(
        <BrowserRouter>
          <PostCardList posts={[mockTestPost()]} featurePost={mockTestPost()} />
          ,
        </BrowserRouter>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

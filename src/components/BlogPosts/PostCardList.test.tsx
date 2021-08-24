import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import PostCardList from './PostCardList';

describe('PostCardList', () => {
  it('Should successfully render', () => {
    const wrapper = renderer
      .create(
        <BrowserRouter>
          <PostCardList
            posts={[
              {
                id: 1,
                postImg: 'post image',
                postDate: ' post date',
                postTitle: ' post title',
                postText: 'post text',
              },
            ]}
            featurePost={{
              id: 1,
              postImg: 'post image',
              postDate: ' post date',
              postTitle: ' post title',
              postText: 'post text',
            }}
          />
        </BrowserRouter>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

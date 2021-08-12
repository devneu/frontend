import React from 'react';
import renderer from 'react-test-renderer';
import PostCardList from './PostCardList';

describe('PostCardList', () => {
  it('Should successfully render', () => {
    const wrapper = renderer
      .create(
        <PostCardList
          posts={[
            {
              id: 1,
              postImg: 'post image',
              postDate: ' post date',
              postTitle: ' post title',
              postText: 'post text',
              sizeBlock: 2,
            },
          ]}
          featurePost={{
            id: 1,
            postImg: 'post image',
            postDate: ' post date',
            postTitle: ' post title',
            postText: 'post text',
            sizeBlock: 2,
          }}
        />,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

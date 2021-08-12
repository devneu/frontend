import React from 'react';
import renderer from 'react-test-renderer';
import SmallPostCard from './SmallPostCard';

describe('SmallPostCard', () => {
  it('Should successfully render', () => {
    const wrapper = renderer
      .create(
        <SmallPostCard
          post={{
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

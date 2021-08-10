import React from 'react';
import renderer from 'react-test-renderer';
import SmallPostCard from './SmallPostCard';

describe('SmallPostCard', () => {
  it('Should successfully render', () => {
    const wrapper = renderer
      .create(
        // eslint-disable-next-line react/react-in-jsx-scope
        <SmallPostCard
          post={{
            postImg: 'post image',
            postDate: ' post date',
            postTitle: ' post title',
            postText: 'post text',
          }}
        />,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

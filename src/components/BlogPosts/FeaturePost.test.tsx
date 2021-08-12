import React from 'react';
import renderer from 'react-test-renderer';
import FeaturePost from './FeaturePost';

describe('FeaturePost', () => {
  it('Should successfully render', () => {
    const wrapper = renderer
      .create(
        <FeaturePost
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

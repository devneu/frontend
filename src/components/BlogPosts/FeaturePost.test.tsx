import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import FeaturePost from './FeaturePost';

describe('FeaturePost', () => {
  it('Should successfully render', () => {
    const wrapper = renderer
      .create(
        <BrowserRouter>
          <FeaturePost
            post={{
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

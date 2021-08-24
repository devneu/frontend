import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import SmallPostCard from './SmallPostCard';

describe('SmallPostCard', () => {
  it('Should successfully render', () => {
    const wrapper = renderer
      .create(
        <BrowserRouter>
          <SmallPostCard
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

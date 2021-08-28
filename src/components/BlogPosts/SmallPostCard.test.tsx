import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import SmallPostCard from './SmallPostCard';
import { mockTestPost } from './TestMockPost/mockTestPost';

describe('SmallPostCard', () => {
  it('Should successfully render', () => {
    const wrapper = renderer
      .create(
        <BrowserRouter>
          <SmallPostCard post={mockTestPost()} />
          ,
        </BrowserRouter>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

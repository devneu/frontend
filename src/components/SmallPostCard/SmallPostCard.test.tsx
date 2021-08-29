import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import SmallPostCard from './SmallPostCard';
import { createMockPost } from '../../mock/mockPost';

describe('SmallPostCard', () => {
  it('Should successfully render', () => {
    const wrapper = renderer
      .create(
        <BrowserRouter>
          <SmallPostCard post={createMockPost()} />
        </BrowserRouter>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

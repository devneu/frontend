import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import FeaturePost from './FeaturePost';
import { mockTestPost } from './TestMockPost/mockTestPost';

describe('FeaturePost', () => {
  it('Should successfully render', () => {
    const wrapper = renderer
      .create(
        <BrowserRouter>
          <FeaturePost post={mockTestPost()} />
          ,
        </BrowserRouter>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

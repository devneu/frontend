import React from 'react';
import renderer from 'react-test-renderer';
import BlogHeader from './BlogHeader';

describe('BlogHeader', () => {
  it('Should successfully render', () => {
    const wrapper = renderer
      .create(<BlogHeader title="Blog Title" subtitle="Blog Subtitle" />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import LayoutPage from './LayoutPage';

describe('LayoutPage', () => {
  it('Should successfully render', () => {
    const wrapper = renderer.create(<LayoutPage content={<div>Content</div>} side={<div>Side</div>} container className="post-page" />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

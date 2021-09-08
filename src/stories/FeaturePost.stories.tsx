import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { createMockPost } from '../mock/mockPost';
import FeaturePost from '../components/FeaturePost/FeaturePost';

export default {
  title: 'Posts/FeaturePost',
  component: FeaturePost,
} as ComponentMeta<typeof FeaturePost>;

const Template: ComponentStory<typeof FeaturePost> = () => (
  <BrowserRouter>
    <FeaturePost post={createMockPost()} />
  </BrowserRouter>
);

export const Primary = Template.bind({});

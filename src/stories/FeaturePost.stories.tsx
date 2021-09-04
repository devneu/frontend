import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { createMockPost } from '../mock/mockPost';
import FeaturePost from '../components/FeaturePost/FeaturePost';

export default {
  title: 'Posts/FeaturePost',
  component: FeaturePost,
} as ComponentMeta<typeof FeaturePost>;

const Template: ComponentStory<typeof FeaturePost> = () => <FeaturePost post={createMockPost()} />;

export const Primary = Template.bind({});

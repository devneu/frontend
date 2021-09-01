import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FeaturePost from '../components/Posts/FeaturePost';
import { createMockPost } from '../mock/mockPost';

export default {
  title: 'MainPost/FeaturePost',
  component: FeaturePost,
} as ComponentMeta<typeof FeaturePost>;

const Template: ComponentStory<typeof FeaturePost> = () => <FeaturePost post={createMockPost()} />;

export const Primary = Template.bind({});

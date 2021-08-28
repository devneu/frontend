import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FeaturePost from '../components/BlogPosts/FeaturePost';
import { mockTestPost } from '../components/BlogPosts/TestMockPost/mockTestPost';

export default {
  title: 'MainPost/FeaturePost',
  component: FeaturePost,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof FeaturePost>;

const Template: ComponentStory<typeof FeaturePost> = () => <FeaturePost post={mockTestPost()} />;

export const Primary = Template.bind({});

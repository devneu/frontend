import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FeaturePost from '../components/FeaturePost/FeaturePost';
import { createMockPost } from '../mock/mockPost';

export default {
  title: 'MainPost/FeaturePost',
  component: FeaturePost,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof FeaturePost>;

const Template: ComponentStory<typeof FeaturePost> = () => <FeaturePost post={createMockPost()} />;

export const Primary = Template.bind({});

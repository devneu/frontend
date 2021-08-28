import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SmallPostCard from '../components/BlogPosts/SmallPostCard';
import { mockTestPost } from '../components/BlogPosts/TestMockPost/mockTestPost';

export default {
  title: 'ChildPosts/SmallPostCard',
  component: SmallPostCard,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof SmallPostCard>;

const Template: ComponentStory<typeof SmallPostCard> = () => (
  <SmallPostCard post={mockTestPost()} />
);

export const Primary = Template.bind({});

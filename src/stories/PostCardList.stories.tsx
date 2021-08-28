import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PostCardList from '../components/BlogPosts/PostCardList';
import { mockTestPost } from '../components/BlogPosts/TestMockPost/mockTestPost';

export default {
  title: 'PostCardList/PostCardList',
  component: PostCardList,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof PostCardList>;

const Template: ComponentStory<typeof PostCardList> = () => (
  <PostCardList posts={[mockTestPost()]} featurePost={mockTestPost()} />
);

export const Primary = Template.bind({});

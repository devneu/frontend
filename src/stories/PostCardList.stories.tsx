import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PostCardList from '../components/PostsCardList/PostCardList';
import { createMockPost, createMockPosts } from '../mock/mockPost';

export default {
  title: 'Posts/PostCardList',
  component: PostCardList,
} as ComponentMeta<typeof PostCardList>;

const Template: ComponentStory<typeof PostCardList> = () => (
  <PostCardList posts={createMockPosts()} featurePost={createMockPost()} />
);

export const Primary = Template.bind({});

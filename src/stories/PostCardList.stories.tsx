import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import PostCardList from '../components/PostsCardList/PostCardList';
import { createMockPost, createMockPosts } from '../mock/mockPost';

export default {
  title: 'Posts/PostCardList',
  component: PostCardList,
} as ComponentMeta<typeof PostCardList>;

const Template: ComponentStory<typeof PostCardList> = () => (
  <BrowserRouter>
    <PostCardList posts={createMockPosts()} featurePost={createMockPost()} />
  </BrowserRouter>
);

export const Primary = Template.bind({});

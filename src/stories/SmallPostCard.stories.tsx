import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SmallPostCard from '../components/BlogPosts/SmallPostCard';

export default {
  title: 'ChildPosts/SmallPostCard',
  component: SmallPostCard,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof SmallPostCard>;

const Template: ComponentStory<typeof SmallPostCard> = () => (
  <SmallPostCard
    post={{
      id: 1,
      postImg: 'https://dummyimage.com/700x350/dee2e6/6c757d.jpg',
      postDate: ' post date',
      postTitle: ' post title',
      postText: 'post text',
      sizeBlock: 2,
    }}
  />
);

export const Primary = Template.bind({});
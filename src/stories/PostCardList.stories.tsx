import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PostCardList from '../components/BlogPosts/PostCardList';

export default {
  title: 'PostCardList/PostCardList',
  component: PostCardList,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof PostCardList>;

const Template: ComponentStory<typeof PostCardList> = () => (
  <PostCardList
    posts={[
      {
        id: 1,
        postImg: 'https://dummyimage.com/850x350/dee2e6/6c757d.jpg',
        postDate: ' post date',
        postTitle: ' post title',
        postText: 'post text',
        postArticleCaption: ['string'],
        postArticleText: ['string'],
        postTag: ['string'],
      },
    ]}
    featurePost={{
      id: 1,
      postImg: 'https://dummyimage.com/850x350/dee2e6/6c757d.jpg',
      postDate: ' post date',
      postTitle: ' post title',
      postText: 'post text',
      postArticleCaption: ['string'],
      postArticleText: ['string'],
      postTag: ['string'],
    }}
  />
);

export const Primary = Template.bind({});

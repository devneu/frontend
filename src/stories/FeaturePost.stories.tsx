import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FeaturePost from '../components/BlogPosts/FeaturePost';

export default {
  title: 'MainPost/FeaturePost',
  component: FeaturePost,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof FeaturePost>;

const Template: ComponentStory<typeof FeaturePost> = () => (
  <FeaturePost
    post={{
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

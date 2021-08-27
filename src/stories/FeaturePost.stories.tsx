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
      img: 'https://dummyimage.com/700x350/dee2e6/6c757d.jpg',
      date: 'January 21, 2011',
      title: 'DEV-17.com',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.',
      articleCaption: ['hello', 'deb-17'],
      articleText: ['lorem', 'ipsum'],
      tag: ['web', 'js'],
    }}
  />
);

export const Primary = Template.bind({});

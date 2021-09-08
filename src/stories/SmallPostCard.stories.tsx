import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import SmallPostCard from '../components/SmallPostCard/SmallPostCard';
import { createMockPost } from '../mock/mockPost';

export default {
  title: 'Posts/SmallPostCard',
  component: SmallPostCard,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof SmallPostCard>;

const Template: ComponentStory<typeof SmallPostCard> = () => (
  <BrowserRouter>
    <SmallPostCard post={createMockPost()} />
  </BrowserRouter>
);

export const Primary = Template.bind({});

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SmallPostCard from '../components/SmallPostCard/SmallPostCard';
import { createMockPost } from '../mock/mockPost';

export default {
  title: 'ChildPosts/SmallPostCard',
  component: SmallPostCard,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof SmallPostCard>;

const Template: ComponentStory<typeof SmallPostCard> = () => (
  <SmallPostCard post={createMockPost()} />
);

export const Primary = Template.bind({});

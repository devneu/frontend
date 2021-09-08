import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Post from '../components/Post/Post';

export default {
  title: 'Posts/Post',
  component: Post,
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = () => (
  <MemoryRouter initialEntries={['/blog/1']}>
    <Route path="/blog/:postId">
      <Post />
    </Route>
  </MemoryRouter>
);

export const Primary = Template.bind({});

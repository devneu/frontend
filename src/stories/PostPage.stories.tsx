import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter, Route } from 'react-router-dom';
import PostPage from '../pages/PostPage/PostPage';

export default {
  title: 'Posts/PostPage',
  component: PostPage,
} as ComponentMeta<typeof PostPage>;

const Template: ComponentStory<typeof PostPage> = () => (
  <MemoryRouter initialEntries={['/blog/1']}>
    <Route path="/blog/:postId">
      {/*      <PostPage /> */}
    </Route>
  </MemoryRouter>
);

export const Primary = Template.bind({});

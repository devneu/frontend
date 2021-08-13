import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Comments from '../components/Comments';

export default {
  title: 'Comments',
  component: Comments,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof Comments>;

const Template: ComponentStory<typeof Comments> = (args) => <Comments {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  commentsList: [
    {
      commentId: 3,
      parentId: null,
      children: [],
      commentText:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque distinctio praesentium quisquam laudantium tempore? Illum fugit esse nihil obcaecati?',
      userName: 'John Newman 3',
      userAvatar: null,
    },
  ],
  onCommentAdded: () => console.log('added'),
};

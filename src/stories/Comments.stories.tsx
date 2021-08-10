import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Comments from '../components/Comments';

export default {
  title: 'Blog/Comments',
  component: Comments,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof Comments>;

const Template: ComponentStory<typeof Comments> = (args) => <Comments {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

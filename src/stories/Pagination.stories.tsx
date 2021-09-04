import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Pagination from '../components/Pagination/Pagination';

export default {
  title: 'Pagination/Pagination',
  component: Pagination,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

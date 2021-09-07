import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Pagination from '../components/Pagination/Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  totalItems: 10,
  pageSize: 10,
  currentPage: 1,
};

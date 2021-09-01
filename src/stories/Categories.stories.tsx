import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Categories from '../components/Categories/Categories';

export default {
  title: 'Categories/CategoriesWidget',
  component: Categories,
} as ComponentMeta<typeof Categories>;

const Template: ComponentStory<typeof Categories> = () => <Categories />;

export const Primary = Template.bind({});

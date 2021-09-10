import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CategoriesWidget from '../components/widgets/CategoriesWidget/CategoriesWidget';

export default {
  title: 'Widgets/CategoriesWidget',
  component: CategoriesWidget,
} as ComponentMeta<typeof CategoriesWidget>;

const Template: ComponentStory<typeof CategoriesWidget> = () => <CategoriesWidget />;

export const Primary = Template.bind({});

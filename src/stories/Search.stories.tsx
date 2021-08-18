import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchWidget from '../components/Search/Search';

export default {
  title: 'Search/SearchWidget',
  component: SearchWidget,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof SearchWidget>;

const Template: ComponentStory<typeof SearchWidget> = () => <SearchWidget />;

export const Primary = Template.bind({});
Primary.args = { message: 'message' };

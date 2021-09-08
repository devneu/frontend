import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchWidget from '../components/widgets/SearchWidget/SearchWidget';

export default {
  title: 'Widgets/SearchWidget',
  component: SearchWidget,
} as ComponentMeta<typeof SearchWidget>;

const Template: ComponentStory<typeof SearchWidget> = () => <SearchWidget />;

export const Primary = Template.bind({});

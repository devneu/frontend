import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SideWidget from '../components/SideWidget/SideWidget';

export default {
  title: 'Widgets/SideWidget',
  component: SideWidget,
} as ComponentMeta<typeof SideWidget>;

const Template: ComponentStory<typeof SideWidget> = () => <SideWidget />;

export const Primary = Template.bind({});

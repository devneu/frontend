import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SideWidget from '../components/Side/Side';

export default {
  title: 'Side/SideWidget',
  component: SideWidget,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof SideWidget>;

const Template: ComponentStory<typeof SideWidget> = () => <SideWidget />;

export const Primary = Template.bind({});
Primary.args = { message: 'message' };

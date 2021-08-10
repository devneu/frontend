import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SignIn from '../pages/SignIn/SignIn';

export default {
  title: 'Login/Sign in',
  component: SignIn,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof SignIn>;

const Template: ComponentStory<typeof SignIn> = () => <SignIn />;

export const Primary = Template.bind({});

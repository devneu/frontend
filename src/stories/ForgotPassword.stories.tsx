import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';

export default {
  title: 'Reset Password/ForgotPassword',
  component: ForgotPassword,
} as ComponentMeta<typeof ForgotPassword>;

const Template: ComponentStory<typeof ForgotPassword> = () => <ForgotPassword />;

export const Primary = Template.bind({});

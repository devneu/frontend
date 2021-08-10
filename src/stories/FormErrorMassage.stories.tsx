import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormErrorMessage from '../components/FormErrorMessage/FormErrorMessage';

export default {
  title: 'Form/FormErrorMessageProps',
  component: FormErrorMessage,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof FormErrorMessage>;

const Template: ComponentStory<typeof FormErrorMessage> = (args) => <FormErrorMessage {...args} />;

export const Primary = Template.bind({});
Primary.args = { message: 'message' };

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ComingSoon from '../pages/ComingSoon/ComingSoon';

export default {
  title: 'Pages/ComingSoon',
  component: ComingSoon,
} as ComponentMeta<typeof ComingSoon>;

const Template: ComponentStory<typeof ComingSoon> = () => <ComingSoon />;

export const Primary = Template.bind({});

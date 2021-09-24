import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChatPreview from '../components/ChatPreview/ChatPreview';

export default {
  title: 'СhatPreview/ChatPreview',
  component: ChatPreview,
} as ComponentMeta<typeof ChatPreview>;

const Template: ComponentStory<typeof ChatPreview> = () => <ChatPreview />;

export const Primary = Template.bind({});

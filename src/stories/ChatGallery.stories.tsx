import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChatGallery from '../components/ChatGallery/ChatGallery';
import { photos } from '../mock/mockChat';

export default {
  title: 'СhatPreview/ChatGallery',
  component: ChatGallery,
} as ComponentMeta<typeof ChatGallery>;

// eslint-disable-next-line max-len
const Template: ComponentStory<typeof ChatGallery> = () => <ChatGallery photos={photos} />;

export const Primary = Template.bind({});

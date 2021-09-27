import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChatSlider from '../components/ChatSlider/ChatSlider';
import { slides } from '../mock/mockChat';

export default {
  title: 'СhatPreview/ChatSlider',
  component: ChatSlider,
} as ComponentMeta<typeof ChatSlider>;

const Template: ComponentStory<typeof ChatSlider> = () => <ChatSlider slides={slides} />;

export const Primary = Template.bind({});

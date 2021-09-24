import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChatGroupMembers from '../components/ChatGroupMembers/ChatGroupMembers';
import { groupChat } from '../mock/mockChat';

export default {
  title: 'СhatPreview/ChatGroupMembers',
  component: ChatGroupMembers,
} as ComponentMeta<typeof ChatGroupMembers>;

// eslint-disable-next-line max-len
const Template: ComponentStory<typeof ChatGroupMembers> = () => (
  <ChatGroupMembers member={groupChat} />
);

export const Primary = Template.bind({});

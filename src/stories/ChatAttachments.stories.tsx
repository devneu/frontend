import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChatAttachments from '../components/ChatAttachments/ChatAttachments';
import { attachments } from '../mock/mockChat';

export default {
  title: 'СhatPreview/ChatAttachments',
  component: ChatAttachments,
} as ComponentMeta<typeof ChatAttachments>;

// eslint-disable-next-line max-len
const Template: ComponentStory<typeof ChatAttachments> = () => (
  <ChatAttachments attachments={attachments} />
);

export const Primary = Template.bind({});

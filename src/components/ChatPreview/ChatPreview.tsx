import React from 'react';
import ChatAttachments from './ChatAttachments';
import GalleryOfChat from './ChatGallery';
import ChatGroupMembers from './ChatGroupMembers';
import ChatUserInfo from './ChatUserInfo';
import { photos, attachments, avatar, groupData } from './mockChat';
import './ChatPreview.scss';

const ChatPreview = () => (
  <div className="preview-of-chat">
    <ChatUserInfo photo={avatar} />
    <ChatGroupMembers data={groupData} />
    <hr />
    <GalleryOfChat photos={photos} />
    <hr />
    <ChatAttachments attachments={attachments} />
  </div>
);

export default ChatPreview;

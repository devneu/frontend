import React from 'react';
import ChatAttachments from '../ChatAttachments/ChatAttachments';
import GalleryOfChat from '../ChatGallery/ChatGallery';
import ChatGroupMembers from '../ChatGroupMembers/ChatGroupMembers';
import ChatUserInfo from '../ChatUserInfo/ChatUserInfo';
import { photos, attachments, avatar, groupData } from '../../mock/mockChat';
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

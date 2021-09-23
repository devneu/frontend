import React from 'react';
import ChatAttachments from '../ChatAttachments/ChatAttachments';
import GalleryOfChat from '../ChatGallery/ChatGallery';
import ChatGroupMembers from '../ChatGroupMembers/ChatGroupMembers';
import { photos, attachments, groupData } from '../../mock/mockChat';
import './ChatPreview.scss';

const ChatPreview = () => (
  <div className="preview-of-chat">
    <ChatGroupMembers data={groupData} />
    <hr />
    <GalleryOfChat photos={photos} />
    <hr />
    <ChatAttachments attachments={attachments} />
  </div>
);

export default ChatPreview;

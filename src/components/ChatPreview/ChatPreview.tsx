import React from 'react';
import ChatAttachments from '../ChatAttachments/ChatAttachments';
import GalleryOfChat from '../ChatGallery/ChatGallery';
import ChatGroupMembers from '../ChatGroupMembers/ChatGroupMembers';
import ChatUserInfo from '../ChatUserInfo/ChatUserInfo';
import { photos, attachments, avatar, groupData } from '../../mock/mockChat';
import './ChatPreview.scss';

const ChatPreview = () => {
  const isGroup: boolean = true;
  return (
    <div className="preview-of-chat">
      {isGroup ? <ChatGroupMembers data={groupData} /> : <ChatUserInfo photo={avatar} />}
      <hr />
      <GalleryOfChat photos={photos} />
      <hr />
      <ChatAttachments attachments={attachments} />
    </div>
  );
};

export default ChatPreview;

import React from 'react';
import ChatAttachments from './ChatAttachments';
import GalleryOfChat from './ChatGallery';
import ChatGroupMember from './ChatGroupMember';
import ChatUserInfo from './ChatUserInfo';
import { galleryImg, fileImg, userData, groupMembersImg } from './mockChat';
import './ChatPreview.scss';

const ChatPreview = () => (
  <div className="preview-of-chat">
    <ChatUserInfo userData={userData} />
    <ChatGroupMember data={groupMembersImg} />
    <hr />
    <GalleryOfChat photos={galleryImg} />
    <hr />
    <ChatAttachments attachments={fileImg} />
  </div>
);

export default ChatPreview;

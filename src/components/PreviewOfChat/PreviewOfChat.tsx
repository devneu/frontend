import React from 'react';
import './PreviewOfChat.scss';
import AttachmentsOfChat from './AttachmentsOfChat';
import GalleryOfChat from './GalleryOfChat';
import GroupMemberOfChat from './GroupMemberOfChat';
import UserInfoOfChat from './UserInfoOfChat';

const PreviewOfChat = () => {
  const a = 0;
  // eslint-disable-next-line no-console
  console.log(a);
  return (
    <div className="preview-of-chat">
      <UserInfoOfChat />
      <GroupMemberOfChat />
      <hr />
      <GalleryOfChat />
      <hr />
      <AttachmentsOfChat />
    </div>
  );
};

export default PreviewOfChat;

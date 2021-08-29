import React from 'react';
import { PageHeader, Typography, Tag, Image } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import Editor from 'rich-markdown-editor';
import { createMockPosts } from '../../mock/mockPost';
import './Post.scss';

const { Title, Text, Paragraph } = Typography;

const Post = () => {
  const history = useHistory();
  const { postId } = useParams<any>();
  const currentPost = createMockPosts().find((el) => el.id === +postId);

  if (!currentPost) {
    history.push('/page-not-found');
    return null;
  }

  return (
    <div className="post">
      <PageHeader>
        <Title>Welcome to Blog Post!</Title>
        <Text type="secondary" italic>
          {currentPost.date}
        </Text>
        <div>
          {currentPost.tag.map((tag) => (
            <Tag className="tag-post" color="#6c757d">
              {tag}
            </Tag>
          ))}
        </div>
      </PageHeader>
      <Image className="img-post" src={currentPost.img} />
      <Paragraph className="text-post">{currentPost.text}</Paragraph>
      <Editor defaultValue={currentPost.articleText} readOnly className="text-post" />
    </div>
  );
};

export default Post;

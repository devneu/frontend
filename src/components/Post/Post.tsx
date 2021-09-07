import React from 'react';
import { PageHeader, Typography, Tag, Image, Descriptions } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { createMockPosts } from '../../mock/mockPost';
import './Post.scss';

const { Text, Paragraph } = Typography;

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
      <PageHeader title="Welcome to Blog Post!">
        <Descriptions.Item>
          <Text type="secondary" italic>
            {currentPost.date}
          </Text>
        </Descriptions.Item>
        <Descriptions.Item>
          <div>
            {currentPost.tag.map((tag) => (
              <Tag className="tag-post" color="#6c757d">
                {tag}
              </Tag>
            ))}
          </div>
        </Descriptions.Item>
      </PageHeader>
      <Image className="img-post" src={currentPost.img} />
      <Paragraph className="text-post">{currentPost.text}</Paragraph>
      <ReactMarkdown className="text-post">
        {currentPost.articleText}
      </ReactMarkdown>
    </div>
  );
};

export default Post;

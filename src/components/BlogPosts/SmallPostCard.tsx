import { Button, Card, Typography } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import React from 'react';
import './SmallPostCard.scss';
import { Post } from '../../types/Post.Interface';

const { Title, Paragraph } = Typography;

interface SmallPostCardProps {
  post: Post;
}

const SmallPostCard = ({ post }: SmallPostCardProps) => {
  const func = () => {
    console.log(post);
  };
  return (
    <Card className="post-card" cover={<img alt="card-img" src={post.postImg} />}>
      <Card.Meta description={post.postDate} />
      <Title level={2}>{post.postTitle}</Title>
      <Paragraph className="post-text">{post.postText}</Paragraph>
      <Button onClick={func} type="link" href="/blog-post:1" className="button-card">
        Read more
        <ArrowRightOutlined />
      </Button>
    </Card>
  );
};

export default SmallPostCard;

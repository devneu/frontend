import { Button, Card, Typography } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import React from 'react';
import './FeaturePost.scss';
import { Link } from 'react-router-dom';
import { Post } from '../../types/Post.Interface';

const { Title, Paragraph } = Typography;

interface FeaturePostProps {
  post: Post;
}

const FeaturePost = ({ post }: FeaturePostProps) => (
  <Card className="post-feature-card" cover={<img alt="card-img" src={post.postImg} />}>
    <Card.Meta description={post.postDate} />
    <Title level={2}>{post.postTitle}</Title>
    <Paragraph className="post-text">{post.postText}</Paragraph>
    <Button
      type="link"
      href={`/${process.env.PUBLIC_URL}/blog/${post.id}`}
      className="button-feature-card"
    >
      Read more
      <ArrowRightOutlined />
    </Button>
    <Link to={`/blog/${post.id}`}>read more</Link>
  </Card>
);

export default FeaturePost;

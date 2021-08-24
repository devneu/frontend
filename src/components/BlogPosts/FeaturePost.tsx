import { Card, Typography } from 'antd';
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
    <Link to={`/blog/${post.id}`}>Read more</Link>
  </Card>
);

export default FeaturePost;

import { Button, Card, Typography } from 'antd';
import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { Post } from '../../types/Post.interface';
import './FeaturePost.scss';

interface FeaturePostProps {
  post: Post;
}

const FeaturePost = ({ post }: FeaturePostProps) => (
  <Card className="post-feature-card" cover={<img alt="card-img" src={post.img} />}>
    <Card.Meta description={post.date} />
    <Typography.Title level={2}>{post.title}</Typography.Title>
    <Typography.Paragraph className="post-text">{post.text}</Typography.Paragraph>
    <NavLink to={`/blog/${post.id}`}>
      <Button type="primary">
        Read more
        <ArrowRightOutlined />
      </Button>
    </NavLink>
  </Card>
);

export default FeaturePost;

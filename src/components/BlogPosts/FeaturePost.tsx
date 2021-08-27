import { Button, Card, Typography } from 'antd';
import React from 'react';
import './FeaturePost.scss';
import { ArrowRightOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { Post } from '../../types/Post.interface';

const { Title, Paragraph } = Typography;

interface FeaturePostProps {
  post: Post;
}

const FeaturePost = ({ post }: FeaturePostProps) => (
  <Card className="post-feature-card" cover={<img alt="card-img" src={post.img} />}>
    <Card.Meta description={post.date} />
    <Title level={2}>{post.title}</Title>
    <Paragraph className="post-text">{post.text}</Paragraph>
    <NavLink to={`/blog/${post.id}`}>
      <Button type="link" className="button-feature-card">
        Read more
        <ArrowRightOutlined />
      </Button>
    </NavLink>
  </Card>
);

export default FeaturePost;

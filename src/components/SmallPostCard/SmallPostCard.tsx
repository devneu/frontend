import { Button, Card, Typography } from 'antd';
import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { Post } from '../../types/Post.interface';
import './SmallPostCard.scss';

interface SmallPostCardProps {
    post: Post;
}

const SmallPostCard = ({ post }: SmallPostCardProps) => (
  <Card className="post-card" cover={<img alt="card-img" src={post.img} />}>
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

export default SmallPostCard;

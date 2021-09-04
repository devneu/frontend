import { Button, Card, Typography } from 'antd';
import React from 'react';
import './SmallPostCard.scss';
import { ArrowRightOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { Post } from '../../types/Post.interface';

const { Title, Paragraph } = Typography;

interface SmallPostCardProps {
  post: Post;
}

const SmallPostCard = ({ post }: SmallPostCardProps) => (
  <Card className="post-card" cover={<img alt="card-img" src={post.img} />}>
    <Card.Meta description={post.date} />
    <Title level={2}>{post.title}</Title>
    <Paragraph className="post-text">{post.text}</Paragraph>
    <NavLink to={`/blog/${post.id}`}>
      <Button type="link" className="button-card">
        Read more
        <ArrowRightOutlined />
      </Button>
    </NavLink>
  </Card>
);

export default SmallPostCard;

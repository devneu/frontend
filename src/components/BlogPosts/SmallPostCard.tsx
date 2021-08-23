import { Card, Typography } from 'antd';
import React from 'react';
import './SmallPostCard.scss';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

interface SmallPostCardProps {
  post: any;
}

const SmallPostCard = ({ post }: SmallPostCardProps) => (
  <Card className="post-card" cover={<img alt="card-img" src={post.postImg} />}>
    <Card.Meta description={post.postDate} />
    <Title level={2}>{post.title}</Title>
    <Paragraph className="post-text">{post.body}</Paragraph>
    <Link to={`/blog/${post.id}`}>read more</Link>
  </Card>
);

export default SmallPostCard;

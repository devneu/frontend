import { Button, Card, Typography } from 'antd';
import React from 'react';
import './SmallPostCard.scss';
import { ArrowRightOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { Post } from '../../types/Post.Interface';

const { Title, Paragraph } = Typography;

interface SmallPostCardProps {
  post: Post;
}

const SmallPostCard = ({ post }: SmallPostCardProps) => (
  <Card className="post-card" cover={<img alt="card-img" src={post.postImg} />}>
    <Card.Meta description={post.postDate} />
    <Title level={2}>{post.postTitle}</Title>
    <Paragraph className="post-text">{post.postText}</Paragraph>
    <NavLink to={`/blog/${post.id}`}>
      <Button type="link" className="button-card">
        Read more
        <ArrowRightOutlined />
      </Button>
    </NavLink>
  </Card>
);

export default SmallPostCard;

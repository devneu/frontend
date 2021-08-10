import { Button, Card, Typography } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import React from 'react';
import './SmallPostCard.scss';

const { Title, Paragraph } = Typography;

interface SmallPostCardProps {
  post: {
    postImg: string;
    postDate: string;
    postTitle: string;
    postText: string;
  };
}

// eslint-disable-next-line no-redeclare
const SmallPostCard = ({ post }: SmallPostCardProps) => (
  <Card className="post-card" cover={<img alt="card-img" src={post.postImg} />}>
    <Card.Meta description={post.postDate} />
    <Title level={2}>{post.postTitle}</Title>
    <Paragraph className="post-text">{post.postText}</Paragraph>
    <Button type="link" href="#" className="button-card">
      Read more
      <ArrowRightOutlined />
    </Button>
  </Card>
);

export default SmallPostCard;

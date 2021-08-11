import { Button, Card, Typography } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import React from 'react';
import './FeaturePost.scss';
import { Post } from '../../types/Post.Interface';

const { Title, Paragraph } = Typography;

interface FeaturePostProps {
  featurePost: Post;
}

const FeaturePost = ({ featurePost }: FeaturePostProps) => (
  <Card className="post-card" cover={<img alt="card-img" src={featurePost.postImg} />}>
    <Card.Meta description={featurePost.postDate} />
    <Title level={2}>{featurePost.postTitle}</Title>
    <Paragraph className="post-text">{featurePost.postText}</Paragraph>
    <Button type="link" href="#" className="button-card">
      Read more
      <ArrowRightOutlined />
    </Button>
  </Card>
);

export default FeaturePost;

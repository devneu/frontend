import React from 'react';
import { Col, Row } from 'antd';
import SmallPostCard from './SmallPostCard';
import { Post } from '../../types/Post.interface';
import FeaturePost from './FeaturePost';

interface PostsCardListProps {
  posts: Post[];
  featurePost: Post;
}

const PostsCardList = ({ posts, featurePost }: PostsCardListProps) => (
  <Row gutter={[24, 24]}>
    <Col span={24}>
      <FeaturePost post={featurePost} />
    </Col>
    {posts.map((post) => (
      <Col span={12}>
        <SmallPostCard key={post.id} post={post} />
      </Col>
    ))}
  </Row>
);

export default PostsCardList;

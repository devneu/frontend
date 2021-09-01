import React from 'react';
import { Col, Row } from 'antd';
import SmallPostCard from '../Posts/SmallPostCard';
import { Post } from '../../types/Post.interface';
import FeaturePost from '../Posts/FeaturePost';

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
      <Col span={12} key={post.id}>
        <SmallPostCard post={post} />
      </Col>
    ))}
  </Row>
);

export default PostsCardList;

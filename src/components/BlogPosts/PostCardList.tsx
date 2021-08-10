import React from 'react';
import { Col, Row } from 'antd';
import SmallPostCard from './SmallPostCard';

interface PostCardListProps {
  postInfo: {
    id: number;
    postImg: string;
    postTitle: string;
    postText: string;
    postDate: string;
    sizeBlock: number;
  };
}

const PostCardList = ({ postInfo }: PostCardListProps) => (
  <Row justify="space-around" align="middle">
    <Col span={14}>
      <Row justify="space-between">
        {
          // @ts-ignore
          // eslint-disable-next-line react/destructuring-assignment,max-len
          postInfo.map(
            (
              obj: {
                id?: number;
                postImg?: string;
                postDate?: string;
                postTitle?: string;
                postText?: string;
              },
              index: number,
            ) => (
              <Col span={index === 0 ? 24 : 11}>
                <SmallPostCard key={obj.id} post={obj} />
              </Col>
            ),
          )
        }
      </Row>
    </Col>
  </Row>
);

export default PostCardList;

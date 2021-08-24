import React from 'react';
import './Post.scss';
import { PageHeader, Typography, Tag, Image } from 'antd';
import { Redirect, useParams } from 'react-router-dom';
import { mockPosts } from '../BlogPosts/data';

const { Title, Text, Paragraph } = Typography;

const Post = () => {
  const { postId } = useParams<any>();
  const currentPost = mockPosts.find((el) => el.id === +postId);
  return (
    <>
      {Number.isNaN(+postId) ? (
        <Redirect to="/page-not-found" />
      ) : (
        <>
          <PageHeader>
            <Title>Welcome to Blog Post!</Title>
            <Text type="secondary" italic>
              {currentPost?.postDate}
            </Text>
            <div className="block-tags-post">
              {currentPost?.postTag.map((tag) => (
                <Tag className="tag-post" color="#6c757d">
                  {tag}
                </Tag>
              ))}
            </div>
          </PageHeader>
          <Image height={400} src={currentPost?.postImg} className="img-post" />
          <Paragraph className="text-post">{currentPost?.postText}</Paragraph>
          {currentPost?.postArticleCaption.map((element, index) => (
            <>
              <Title>{element}</Title>
              <Paragraph className="text-post">{currentPost.postArticleText[index]}</Paragraph>
            </>
          ))}
        </>
      )}
    </>
  );
};

export default Post;

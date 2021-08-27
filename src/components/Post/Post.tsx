import React from 'react';
import './Post.scss';
import { PageHeader, Typography, Tag, Image } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import { mockPosts } from '../BlogPosts/data';
import PageNotFound from '../PageNotFound/PageNotFound';

const { Title, Text, Paragraph } = Typography;

const Post = () => {
  const history = useHistory();
  const { postId } = useParams<any>();
  const currentPost = mockPosts.find((el) => el.id === +postId);

  const handleRedirect = () => {
    history.push('/page-not-found');
  };
  return (
    <div className="post">
      {!currentPost ? (
        <div onLoad={handleRedirect}>
          <PageNotFound />
        </div>
      ) : (
        <>
          <PageHeader>
            <Title>Welcome to Blog Post!</Title>
            <Text type="secondary" italic>
              {currentPost?.date}
            </Text>
            <div>
              {currentPost?.tag.map((tag) => (
                <Tag className="tag-post" color="#6c757d">
                  {tag}
                </Tag>
              ))}
            </div>
          </PageHeader>
          <Image height={400} src={currentPost?.img} className="img-post" />
          <Paragraph className="text-post">{currentPost?.text}</Paragraph>
          {currentPost?.articleCaption.map((element, index) => (
            <>
              <Title>{element}</Title>
              <Paragraph className="text-post">{currentPost.articleText[index]}</Paragraph>
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default Post;

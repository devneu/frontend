/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Col, PageHeader, Typography } from 'antd';
import { Link, useParams } from 'react-router-dom';

const { Title, Text } = Typography;

const SinglePost = () => {
  const [post, setPost] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  const { id, postId } = useParams<any>();
  console.log('postId', postId);
  console.log('id', id);
  console.log(history);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
      .then((rb: any) => {
        const reader = rb.body.getReader();

        return new ReadableStream({
          start(controller) {
            // The following function handles each data chunk
            function push() {
              // "done" is a Boolean and value a "Uint8Array"
              // @ts-ignore
              reader.read().then(({ done, value }) => {
                // If there is no more data to read
                if (done) {
                  controller.close();
                  return;
                }
                // Get the data and send it to the browser via the controller
                controller.enqueue(value);
                // Check chunks by logging to the console
                push();
              });
            }

            push();
          },
        });
      })
      .then((stream) => {
        // Respond with our stream
        return new Response(stream, { headers: { 'Content-Type': 'text/html' } }).text();
      })
      .then((_post) => {
        // console.log('resul', _post);
        setPost(JSON.parse(_post));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [postId]);

  return (
    <>
      <PageHeader>
        <Link to={`/blog/88/88`}>read more 88</Link> <br />
        <Link to={`/blog/99/99`}>read more 99</Link>
        {isLoading ? (
          'Loading...'
        ) : (
          <>
            <Title>ID: {post.id}</Title>
            <Title>{post.title}</Title>
            {post.date && (
              <Text type="secondary" italic>
                Posted on January 1, 2021 by Start Bootstrap
              </Text>
            )}
            <p>{post.body}</p>
            {post.title && (
              <Text type="secondary" italic>
                Posted on January 1, 2021 by Start Bootstrap
              </Text>
            )}
          </>
        )}
      </PageHeader>
    </>
  );
};

export default SinglePost;

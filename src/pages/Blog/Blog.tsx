/* eslint-disable */
import { Card, Col, Row, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import BlogHeader from '../../components/BlogHeader';
import Pagination from '../../components/Pagination';
import './Blog.scss';
import PostsCardList from '../../components/BlogPosts/PostCardList';
import SearchWidget from '../../components/Search/Search';
import { mockPosts } from '../../components/BlogPosts/data';
import CategoriesWidget from '../../components/Categories/Categories';
import { Link, useParams } from 'react-router-dom';

const Blog = () => {
  // const [featurePost, ...posts] = mockPosts;
  const [featurePost] = mockPosts;
  const [page, onPageChange] = useState(1);

  const [posts, setPosts] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  console.log(history);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
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
      .then((_posts) => {
        // console.log('resul', _post);
        setPosts(JSON.parse(_posts));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <BlogHeader title="Post Title" subtitle="Post Subtitle" />
      <Row className="container" justify="center">
        <Col span={14}>
          {isLoading ? (
            <Spin />
          ) : (
            <>
              <PostsCardList posts={posts} featurePost={featurePost} />
              <Pagination
                totalItems={(posts as []).length}
                pageSize={10}
                currentPage={page}
                onPageChange={onPageChange}
              />
            </>
          )}
        </Col>
        <Col span={6} className="sidebar-blog-post">
          <SearchWidget />
          <CategoriesWidget />
        </Col>
      </Row>
    </>
  );
};

export default Blog;

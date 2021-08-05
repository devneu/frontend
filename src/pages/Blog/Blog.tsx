import React from 'react';
import BlogHeader from '../../components/BlogHeader';
import './Blog.scss';
import PostCardList from "./PostCardList";
import {Col, Row} from "antd";


const Blog = () => {
    return (
        <>
            <BlogHeader
                title="Post Title"
                subtitle="Post Subtitle"/>

                <PostCardList/>
        </>
    )
}

export default Blog;
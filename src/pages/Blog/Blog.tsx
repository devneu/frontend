import React from 'react';
import BlogHeader from '../../components/BlogHeader';
import SmallPostCard from "./SmallPostCard";
import {Row, Col} from "antd";
import './Blog.scss';
import {postInfo} from "./data";


const Blog = () => {
    return (
        <>
            <BlogHeader
                title="Post Title"
                subtitle="Post Subtitle"/>

            <Row justify="space-around" align="middle">
                <Col span={14}>
                    <Row justify="space-around">
                        {
                            postInfo.map((obj) => <SmallPostCard postImg={obj.postImg} postTitle={obj.postTitle}
                                                                 postText={obj.postText} sizeBlock={obj.sizeBlock}/>)
                        }
                    </Row>
                </Col>
                <Col span={6}></Col>
            </Row>
        </>
    )
}

export default Blog;
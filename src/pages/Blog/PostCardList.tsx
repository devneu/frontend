import {Col, Row} from "antd";
import {postInfo} from "./data";
import SmallPostCard from "./SmallPostCard";
import React from "react";

const PostCardList  = () => {
    return (
        <Row justify="space-around" align="middle">
            <Col span={14}>
                <Row justify="space-between">
                    {
                        postInfo.map((obj, index) => <Col span={index==0 ? 24: 11}><SmallPostCard key={obj.id} post={obj}/></Col>)
                    }
                </Row>
            </Col>
            <Col span={6}></Col>
        </Row>
    );
}

export default PostCardList;
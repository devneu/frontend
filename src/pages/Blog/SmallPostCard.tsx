import {Button, Card, Col, Typography} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";
import React from "react";

const { Title, Text } = Typography;
const { Meta } = Card;

interface SmallPostCard {
    postImg: string,
    postTitle: string,
    postText: string,
    sizeBlock: number
}


const SmallPostCard = ({postImg, postTitle, postText, sizeBlock}: SmallPostCard) => {

    return (
        <Col span={sizeBlock}>
            <Card
                className="post-card"
                cover={
                    <img alt="card-img"
                         src={postImg}
                    />
                }>
                <Meta description="January 1, 2021"/>
                <Title level={2}>{postTitle}</Title>
                <Text className="post-text">{postText}</Text>
                <br/>
                <Button type="primary" className="button-card">Read more<ArrowRightOutlined /></Button>
            </Card>
        </Col>
    );
}

export default SmallPostCard;
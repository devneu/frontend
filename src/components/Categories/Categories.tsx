import React from 'react';
import './Categories.scss';
import { Button, Card, Col, Row } from 'antd';

const CategoriesWidget = () => (
  <>
    <Card title="Search">
      <Row justify="start" gutter={[8, 8]}>
        <Col span={12}>
          <Button type="link" href="#">
            Web Design
          </Button>
        </Col>
        <Col span={12}>
          <Button type="link" href="#">
            HTML
          </Button>
        </Col>
        <Col span={12}>
          <Button type="link" href="#">
            Freebies
          </Button>
        </Col>
        <Col span={12}>
          <Button type="link" href="#">
            JavaScript
          </Button>
        </Col>
        <Col span={12}>
          <Button type="link" href="#">
            CSS
          </Button>
        </Col>
        <Col span={12}>
          <Button type="link" href="#">
            Tutorials
          </Button>
        </Col>
      </Row>
    </Card>
  </>
);

export default CategoriesWidget;

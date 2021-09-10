import React from 'react';
import { Button, Card, Col, Row } from 'antd';
import './CategoriesWidget.scss';

const CategoriesWidget = () => (
  <Card title="Categories" className="categories-widget-card">
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
);

export default CategoriesWidget;

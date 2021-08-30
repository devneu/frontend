import React from 'react';
import './Side.scss';
import { Card, Form } from 'antd';
import { useForm } from 'react-hook-form';

const SideWidget = () => {
  const { handleSubmit } = useForm();

  // eslint-disable-next-line no-console
  const onSubmit = (data: any) => console.log('Search result', data);

  return (
    <Card title="Side Widget" className="side-widget-card">
      <Form onFinish={handleSubmit(onSubmit)} layout="inline">
        You can put anything you want inside of these side widgets. They are easy to use, and
        feature the Bootstrap 5 card component!
      </Form>
    </Card>
  );
};

export default SideWidget;

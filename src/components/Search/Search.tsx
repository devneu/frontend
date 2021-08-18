import React from 'react';
import './Search.scss';
import { Button, Card, Form, Input } from 'antd';
import { useForm } from 'react-hook-form';

const SearchWidget = () => {
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line no-console
  const onSubmit = (data: any) => console.log('Search result', data);

  return (
    <Card title="Search" className="search-widget-card">
      <Form onFinish={handleSubmit(onSubmit)} layout="inline">
        <Form.Item name="searchInput">
          <Input
            className="input-search"
            placeholder="Enter search term..."
            {...register('search')}
          />
        </Form.Item>
        <Form.Item>
          <Button className="button-search" type="primary" htmlType="submit">
            Go!
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default SearchWidget;

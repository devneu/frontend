import React from 'react';
import { Button, Card, Form, Input } from 'antd';
import { useForm } from 'react-hook-form';
import './Search.scss';

const SearchWidget = () => {
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line no-console
  const onSubmit = (data: any) => console.log('Search result', data);

  return (
    <Card className="search-widget-card" title="Search">
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

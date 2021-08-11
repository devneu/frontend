import React from 'react';
import './Search.scss';
import { Button, Card, Form, Input } from 'antd';
import { useForm } from 'react-hook-form';

export const Search = () => {
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line no-console
  const onSubmit = (data: any) => console.log('Search result', data);

  return (
    <>
      <Card title="Search" className="search-card">
        <Form onFinish={handleSubmit(onSubmit)}>
          <div className="form-flex">
            <div className="input-search">
              <Form.Item name="searchInput">
                <Input placeholder="Enter search term..." {...register('search')} />
              </Form.Item>
            </div>
            <div className="button-search">
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Go!
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </Card>
    </>
  );
};

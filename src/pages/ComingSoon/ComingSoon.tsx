import React from 'react';
import './ComingSoon.scss';
import { Input, Form, Button, Typography } from 'antd';
import ReactPlayer from 'react-player';
import { useForm } from 'react-hook-form';
import { EMAIL_PATTERN } from '../../utils/formValidations';

const { Title, Paragraph } = Typography;

const ComingSoon = () => {
  const { register, handleSubmit } = useForm();
  // eslint-disable-next-line no-console
  const onSubmit = (data: any) => console.log('ComingSoon', data);
  return (
    <div className="coming-soon">
      <ReactPlayer className="bg-video" url="https://youtu.be/XGw3OgCBo_U" loop muted playing />
      <div className="content">
        <Title className="title">Our Website is Coming Soon</Title>
        <Paragraph className="text">
          We&apos;re working hard to finish the development of the site. Sign up below to receive
          updates and to be noticed when we launch!
        </Paragraph>
        <Form onFinish={handleSubmit(onSubmit)}>
          <Form.Item className="subscribe-form">
            <Input
              type="large"
              placeholder="Enter Email address..."
              {...register('email', {
                required:
                  'This input is required , maximum length is 50 symbols and has such template as: expample.exam@gmail.com',
                maxLength: 50,
                pattern: EMAIL_PATTERN,
              })}
            />
            <Button htmlType="submit" type="primary">
              NOTIFY ME!
            </Button>
          </Form.Item>
        </Form>
      </div>
      <nav className="social-links">
        <a className="social-link" href="#twitter">
          <img
            className="social-icon"
            src={`${process.env.PUBLIC_URL}/images/twitter.png`}
            alt="twitter"
          />
        </a>
        <a className="social-link" href="#telegram">
          <img
            className="social-icon"
            src={`${process.env.PUBLIC_URL}/images/telegram.png`}
            alt="telegram"
          />
        </a>
      </nav>
    </div>
  );
};

export default ComingSoon;

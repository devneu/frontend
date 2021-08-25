import React from 'react';
import './ForgotPassword.scss';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { useForm } from 'react-hook-form';
import FormErrorMessage from '../../components/FormErrorMessage/FormErrorMessage';

const { Title, Link, Text } = Typography;

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line no-console
  const onSubmit = (data: any) => console.log('Reset password basic', data);
  return (
    <div className="forgot-password">
      <Row justify="center">
        <Col className="img-block" xs={0} sm={0} md={10} lg={8} xl={8} xxl={6}>
          <img src="https://i.imgflip.com/5jwx15.jpg" alt="Welcome on portal" />
        </Col>

        <Col className="form-block" xs={24} sm={24} md={10} lg={8} xl={8} xxl={6}>
          <Col span={18}>
            <div className="text-wrapper">
              <Title className="title" level={3}>
                Forgot Your Password?
              </Title>
              <Text type="secondary" className="secondary-text">
                We get it, stuff hapens. Just enter your email address below and we`ll send you a
                link to reset your password!
              </Text>
            </div>
            <Form onFinish={handleSubmit(onSubmit)}>
              <Form.Item>
                <Input.Password
                  className="password"
                  placeholder="Password"
                  {...register('password', { required: 'This input is required' })}
                />
                <FormErrorMessage message={errors.password?.message} />
              </Form.Item>

              <Form.Item>
                <Button
                  className="reset-password"
                  block
                  type="primary"
                  htmlType="submit"
                  shape="round"
                >
                  Reset Password
                </Button>
              </Form.Item>

              <hr className="line" />

              <div className="footer">
                <Link href="/sign-out">Create an Account</Link>
                <Link href="/sign-in">Already have an account? Login!</Link>
              </div>
            </Form>
          </Col>
        </Col>
      </Row>
    </div>
  );
};
export default ForgotPassword;

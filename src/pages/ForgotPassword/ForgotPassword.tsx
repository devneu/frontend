import React from 'react';
import './ForgotPassword.scss';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { useForm } from 'react-hook-form';
import FormErrorMessage from '../../components/FormErrorMessage/FormErrorMessage';
import { EMAIL_PATTERN } from '../../utils/formValidations';

const { Title, Link } = Typography;

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line no-console
  const onSubmit = (data: any) => console.log('SignIn basic', data);
  const messageHeader: string = 'Forgot Your Password?';
  const messageText: string = 'We get it, stuff hapens. Just enter your email address below and we\'ll send you a link to reset your password!';
  return (
    <div className="forgot-password">
      <Row justify="center">
        <Col className="img-block" xs={0} sm={0} md={10} lg={10} xl={9} xxl={8}>
          <img src="https://i.imgflip.com/5jwx15.jpg" alt="Welcome on portal" />
        </Col>

        <Col className="form-block" xs={20} sm={22} md={10} lg={10} xl={9} xxl={8}>
          <Col span={18}>
            <Form onFinish={handleSubmit(onSubmit)}>
              <Title className="title-form" level={2}>
                <h2>{messageHeader}</h2>
                <p>{messageText}</p>
              </Title>

              <Form.Item>
                <Input
                  className="email"
                  placeholder="Enter Email Address..."
                  {...register('email', {
                    required:
                      'This input is required , maximum length is 50 symbols and has such template as: expample.exam@gmail.com',
                    maxLength: 50,
                    pattern: EMAIL_PATTERN,
                  })}
                />
                <FormErrorMessage message={errors.email?.message} />
              </Form.Item>

              <Form.Item>
                <Button
                  className="_reset-password"
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
                <br />
                <Link href="/frontend/sign-out">
                  <Button className="_create-account" block type="primary" shape="round">
                    Create an Account
                  </Button>
                </Link>
                <br />
                <Link href="/frontend/sign-in">
                  <Button className="_login" block type="primary" shape="round">
                    Already have an account? Login!
                  </Button>
                </Link>
              </div>
            </Form>
          </Col>
        </Col>
      </Row>
    </div>
  );
};
export default ForgotPassword;

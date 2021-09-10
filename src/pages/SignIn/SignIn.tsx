import React from 'react';
import './SignIn.scss';
import { Form, Input, Button, Checkbox, Row, Col, Typography } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { GoogleOutlined } from '@ant-design/icons';
import FormErrorMessage from '../../components/FormErrorMessage/FormErrorMessage';
import { EMAIL_PATTERN } from '../../utils/formValidations';

const { Title, Link } = Typography;

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  // eslint-disable-next-line no-console
  const onSubmit = (data: any) => console.log('SignIn basic', data);

  const handleGoogleResponse = (response: any) => {
    // eslint-disable-next-line no-console
    console.log('google profileInfo: ', response.profileObj);
  };
  const handleFacebookResponse = (response: any) => {
    // eslint-disable-next-line no-console
    console.log('facebook profileInfo: ', response);
  };

  return (
    <div className="sign-in">
      <Row justify="center">
        <Col className="img-block" xs={0} sm={0} md={0} lg={8} xl={6} xxl={6}>
          <img src="https://source.unsplash.com/K4mSJ7kc0As/600x800" alt="Welcome on portal" />
        </Col>

        <Col className="form-block" xs={20} sm={22} md={12} lg={8} xl={6} xxl={6}>
          <Col span={18}>
            <Form onFinish={handleSubmit(onSubmit)}>
              <Title className="title-form" level={2}>
                Welcome Back!
              </Title>

              <Form.Item>
                <Input
                  className="input"
                  placeholder="Email"
                  {...register('email', {
                    required: 'This input is required',
                    maxLength: { value: 50, message: 'Maximum length is 50 symbols' },
                    pattern: {
                      value: EMAIL_PATTERN,
                      message: 'This input has such template as: expample.exam@gmail.com',
                    },
                  })}
                />
                <FormErrorMessage message={errors.email?.message} />
              </Form.Item>

              <Form.Item>
                <Input.Password
                  className="input"
                  placeholder="Password"
                  {...register('password', { required: 'This input is required' })}
                />
                <FormErrorMessage message={errors.password?.message} />
              </Form.Item>

              <Controller
                control={control}
                name="remeberMe"
                defaultValue={false}
                render={({ field: { onChange, value } }) => (
                  <Checkbox className="checkbox" onChange={onChange} checked={value}>
                    Remember Me
                  </Checkbox>
                )}
              />

              <Form.Item>
                <Button block className="button" type="primary" htmlType="submit" shape="round">
                  Login
                </Button>
              </Form.Item>

              <hr className="line" />

              <Form.Item>
                <GoogleLogin
                  clientId="459389646319-e4g64jlp1jfpi66h3kgv1uuek71la5b0.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={handleGoogleResponse}
                  onFailure={handleGoogleResponse}
                  cookiePolicy="single_host_origin"
                  render={(renderProps) => (
                    <Button
                      onClick={renderProps.onClick}
                      className="button"
                      block
                      danger
                      htmlType="submit"
                      shape="round"
                    >
                      <GoogleOutlined />
                      Login with Google
                    </Button>
                  )}
                />
              </Form.Item>

              <FacebookLogin
                appId="226836885848996"
                autoLoad={false}
                fields="name,email,picture"
                callback={handleFacebookResponse}
                cssClass="facebook-btn"
                icon="fa-facebook"
              />

              <hr className="line" />

              <div className="footer">
                <Link href="/forgot-password">Forgot password ?</Link>
                <Link href="/sign-out">Create an Account!</Link>
              </div>
            </Form>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;

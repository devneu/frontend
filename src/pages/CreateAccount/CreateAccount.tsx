import React from 'react';
import './CreateAccount.scss';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { useForm } from 'react-hook-form';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { GoogleOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import FormErrorMessage from '../../components/FormErrorMessage/FormErrorMessage';

const { Title, Link } = Typography;

const CreateAccount = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line no-console
  const onSubmit = (data: any) => console.log('SignIn basic', data);

  const handleGoogleResponse = (response: any) => {
    // eslint-disable-next-line no-console
    console.log('google profileInfo: ', response.profileObj);
  };
  // const handleFacebookResponse = (response: any) => {
  //   // eslint-disable-next-line no-console
  //   console.log('facebook profileInfo: ', response);
  // };

  return (
    <div className="create-account">
      <Row justify="center">
        <Col className="img-block" xs={0} sm={0} md={10} lg={10} xl={9} xxl={8}>
          <img src="https://source.unsplash.com/Mv9hjnEUHR4/600x800" alt="Welcome on portal" />
        </Col>

        <Col className="form-block" xs={20} sm={22} md={10} lg={10} xl={9} xxl={8}>
          <Col span={18}>
            <Form onFinish={handleSubmit(onSubmit)}>
              <Title className="title-form" level={1}>
                Create an Account!
              </Title>
              <Form.Item>
                <Row gutter={8}>
                  <Col span={12}>
                    <Form.Item name="captchas" noStyle>
                      <Input className="email" placeholder="First Name" />
                      <FormErrorMessage message={errors.email?.message} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="LastName"
                      noStyle
                      rules={[
                        {
                          required: true,
                          message: 'This input is required ,has such template as: Your Name',
                        },
                      ]}
                    >
                      <Input className="last-name" placeholder="Last Name" />
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item
                name="username"
                className="email-form"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input placeholder="Email" className="email-input" />
              </Form.Item>
              <Form.Item>
                <Row gutter={8}>
                  <Col span={12}>
                    <Form.Item>
                      <Input.Password
                        className="password"
                        placeholder="Password"
                        iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : false)}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="captcha"
                      noStyle
                      rules={[
                        {
                          required: true,
                          message: 'This input is required ,has such template as: Your Password',
                        },
                      ]}
                    >
                      <Input.Password
                        className="password"
                        placeholder="Password"
                        iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : false)}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item>
                <Button block type="primary" htmlType="submit" shape="round">
                  Register Account
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
                      block
                      danger
                      htmlType="submit"
                      shape="round"
                    >
                      <GoogleOutlined />
                      Register with Google
                    </Button>
                  )}
                />
              </Form.Item>

              <Form.Item>
                <FacebookLogin
                  appId="1088597931155576"
                  autoLoad
                  cssClass="facebook-btn"
                  icon="fa-facebook"
                  callback={(renderProps: any) => (
                    <Button
                      onClick={renderProps.onClick}
                      block
                      danger
                      htmlType="submit"
                      shape="round"
                    >
                      Register with Google
                    </Button>
                  )}
                />
              </Form.Item>
              <hr className="line" />

              <div className="footer">
                <Link href="/forgot-password">Forgot password?</Link>
                <Link href="/sign-in">Already have an account? Login!</Link>
              </div>
            </Form>
          </Col>
        </Col>
      </Row>
    </div>
  );
};
export default CreateAccount;

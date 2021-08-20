import React from 'react';
import './SignUp.scss';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { useForm } from 'react-hook-form';
import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';  TODO:{https://bsalo.atlassian.net/jira/software/projects/DEV/boards/2?selectedIssue=DEV-60}
import { GoogleOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import FormErrorMessage from '../../components/FormErrorMessage/FormErrorMessage';
import { EMAIL_PATTERN } from '../../utils/formValidations';

const { Title, Link } = Typography;

const SignUp = () => {
  const {
    register,
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
  // eslint-disable-next-line no-console
  // console.log('facebook profileInfo: ', response);
  // };

  return (
    <div className="create-account">
      <Row justify="center">
        <Col className="img-block" xs={0} sm={0} md={10} lg={10} xl={9} xxl={8} />

        <Col className="form-block" xs={20} sm={22} md={10} lg={10} xl={9} xxl={8}>
          <Form onFinish={handleSubmit(onSubmit)}>
            <Title className="title-form" level={1}>
              Create an Account!
            </Title>
            <Form.Item>
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item>
                    <Input
                      className="first-name"
                      placeholder="First Name"
                      {...register('firstname', {
                        required: 'This input is required ,has such template as: Yor First Name',
                      })}
                    />
                    <FormErrorMessage message={errors.firstname?.message} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item>
                    <Input
                      className="last-name"
                      placeholder="Last Name"
                      {...register('lastname', {
                        required: 'This input is required ,has such template as: Yor Last Name',
                      })}
                    />
                    <FormErrorMessage message={errors.lastname?.message} />
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item>
              <Input
                placeholder="Email"
                className="email-input"
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
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item>
                    <Input.Password
                      className="password"
                      placeholder="Password"
                      iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : false)}
                      {...register('password', {
                        required: 'This input is password',
                      })}
                    />
                    <FormErrorMessage message={errors.password?.message} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item>
                    <Input.Password
                      className="password-repeat"
                      placeholder="Password"
                      iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : false)}
                      {...register('passwordrepeat', {
                        required: 'This input is password',
                      })}
                    />
                    <FormErrorMessage message={errors.passwordrepeat?.message} />
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item>
              <Button block type="primary" htmlType="submit" shape="round">
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
            {/*
                <Form.Item>
               <FacebookLogin
               appId="226836885848996"
               autoLoad={false}
               fields="name,email,picture"
               callback={handleFacebookResponse}
               cssClass="facebook-btn"
               icon="fa-facebook"
               >}
              <Button
                block
                danger
                htmlType="submit"
                shape="round"
                className="facebook-btn"
                icon={<FacebookOutlined />}
              >
                Register with Facebook
              </Button>
              </Form.Item>
              */}

            <hr className="line" />
            <div className="footer">
              <Link className="forgot-password" href="/forgot-password">
                Forgot password?
              </Link>
              <Link className="sign-in" href="/sign-in">
                Already have an account? Login!
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default SignUp;

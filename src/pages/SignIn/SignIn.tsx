import React from "react";
import "./SignIn.scss";
import {EMAIL_PATTERN} from "../../utils/formValidations";
import FormErrorMessage from "../../components/FormErrorMessage/FormErrorMassage";
import {Form, Input, Button, Checkbox, Row, Col, Typography} from 'antd';
import {useForm, SubmitHandler, Controller} from "react-hook-form";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import {GoogleOutlined} from "@ant-design/icons";
const { Title, Link } = Typography;


const SignIn = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
        control
    } = useForm();

    const onSubmit = (data: any) => console.log("SignIn basic", data);

    const handleGoogleResponse  = (response: any) => {
        console.log("google profileInfo: ", response.profileObj);
    }
    const handleFacebookResponse  = (response: any) => {
        console.log("facebook profileInfo: ", response);
    }


    return (
        <div className="sign-in">
            <Row justify="center">


                <Col className="img-block" xs={0} sm={0} md={10} lg={10} xl={9} xxl={8}>
                    <img src="https://source.unsplash.com/K4mSJ7kc0As/600x800"/>
                </Col>



                <Col className="form-block" xs={20} sm={22} md={10} lg={10} xl={9} xxl={8}>
                    <Col span={18}>


                        <Form onFinish={handleSubmit(onSubmit)}>


                            <Title className="title-form" level={2}>Welcome Back!</Title>


                            <Form.Item name="email">
                                <Input className="email" placeholder="Email" {...register("email", {required: "This input is required , maximum length is 50 symbols and has such template as: expample.exam@gmail.com", maxLength: 50, pattern: EMAIL_PATTERN})}></Input>
                                <FormErrorMessage message={errors.email?.message}/>
                            </Form.Item>

                            <Form.Item name="password">
                                <Input.Password className="password" placeholder="Password" {...register("password", {required: "This input is required"})}></Input.Password>
                                <FormErrorMessage message={errors.password?.message}/>
                            </Form.Item>

                            <Controller
                                control={control}
                                name="remeberMe"
                                defaultValue={false}
                                render={({
                                             field: { onChange, value },
                                         }) => (
                                    <Checkbox
                                        onChange={onChange}
                                        checked={value}
                                    >Remember Me</Checkbox>
                                )}
                            />

                            <Form.Item>
                                <Button block type="primary" htmlType="submit" shape="round">Login</Button>
                            </Form.Item>

                            <hr className="line"/>

                            <Form.Item>
                                <GoogleLogin
                                    clientId="459389646319-e4g64jlp1jfpi66h3kgv1uuek71la5b0.apps.googleusercontent.com"
                                    buttonText="Login"
                                    onSuccess={handleGoogleResponse }
                                    onFailure={handleGoogleResponse }
                                    cookiePolicy={'single_host_origin'}
                                    render={renderProps => (
                                        <Button onClick={renderProps.onClick} block danger htmlType="submit"
                                                shape="round"><GoogleOutlined/>Login with Google</Button>
                                    )}
                                />
                            </Form.Item>

                            <FacebookLogin
                                appId="226836885848996"
                                autoLoad={false}
                                fields="name,email,picture"
                                callback={handleFacebookResponse}
                                cssClass="my-facebook-button-class"
                                icon="fa-facebook"
                            />

                            <hr className="line"/>


                            <div className="footer">
                                <br/>
                                <Link href="/forgot-password">
                                    Forgot password ?
                                </Link>
                                <br/>
                                <Link href="/sign-out">
                                    Create an Account!
                                </Link>
                            </div>

                        </Form>


                    </Col>
                </Col>

            </Row>
        </div>
    );
}
export default SignIn;


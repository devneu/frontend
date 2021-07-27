import React from "react";
import "./SignIn.scss";
import {Form, Input, Button, Checkbox, Row, Col, Typography} from 'antd';
import {useForm, SubmitHandler, Controller} from "react-hook-form";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import {GoogleOutlined} from "@ant-design/icons";
const { Title, Link } = Typography;



const SignIn = () => {
    const avaibleSymb = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const {
        register,
        handleSubmit,
        formState: {errors},
        control
    } = useForm();

    const onSubmit = (data: any) => console.log("SignIn basic", data);

    const responseGoogle = (response: any) => {
        console.log("google profileInfo: ", response.profileObj);
    }
    const responseFacebook = (response: any) => {
        console.log("facebook profileInfo: ", response);
    }


    return (
        <div className="sign-in-wrapper">
            <Row justify="center">

                {/*block with img begin*/}
                <Col className="img-block" xs={0} sm={0} md={10} lg={10} xl={12}>
                    <img src="https://source.unsplash.com/K4mSJ7kc0As/600x800"/>
                </Col>
                {/*block with img end*/}

                {/*block with form begin*/}
                <Col className="form-block" xs={20} sm={22} md={10} lg={10} xl={12}>
                    <Col span = {18}>

                        {/*Form begin*/}
                        <Form onFinish={handleSubmit(onSubmit)}>

                            {/*Caption Form*/}
                            <Title className = "title-form" level={2}>Welcome Back!</Title>

                            {/*Email input*/}
                            <Form.Item name="email">
                                <Input className="email" placeholder="Email" {...register("email", {required: true, maxLength: 50, pattern: avaibleSymb})}></Input>
                                {errors.email && <div className="error-message"><span>This input is required , maximum length is 50 symbols and has such template as: expample.exam@gmail.com</span></div>}
                            </Form.Item>

                            {/*Email input*/}
                            <Form.Item name="password">
                                <Input.Password className="password" placeholder="Password" {...register("password", {required: true})}></Input.Password>
                                {errors.password && <div className="error-message"><span>This input is required</span></div>}
                            </Form.Item>

                            {/*Checkbox*/}
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

                            {/*Button login*/}
                            <Form.Item>
                                <Button block size = "large" type="primary" htmlType="submit" shape="round">login</Button>
                            </Form.Item>

                            <hr className = "line"/>

                            {/*Google button*/}
                            <Form.Item>
                                <GoogleLogin
                                    clientId="459389646319-e4g64jlp1jfpi66h3kgv1uuek71la5b0.apps.googleusercontent.com"
                                    buttonText="Login"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                    render={renderProps => (
                                        <Button onClick={renderProps.onClick} block danger size = "large" htmlType="submit"
                                                shape="round"><GoogleOutlined/>Login with Google</Button>
                                    )}
                                />
                            </Form.Item>

                            {/*Facebook button*/}
                            <FacebookLogin
                                appId="226836885848996"
                                autoLoad={false}
                                fields="name,email,picture"
                                callback={responseFacebook}
                                cssClass="my-facebook-button-class"
                                icon="fa-facebook"
                            />

                            <hr className = "line"/>

                            {/*Block with links*/}
                            <div className="footer-link">
                                <br/>
                                <Link href="/new-pass" target="_blank">
                                    Forgot password ?
                                </Link>
                                <br/>
                                <Link href="/create-acc" target="_blank">
                                    Create an Account!
                                </Link>
                            </div>

                        </Form>

                        {/*Form end*/}
                    </Col>
                </Col>

                {/*block with form end*/}
            </Row>
        </div>
    );
}
export default SignIn;


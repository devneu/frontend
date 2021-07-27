import React from "react";
import "./SignIn.scss";
import {Form, Input, Button, Checkbox, Row, Col, Typography} from 'antd';
import {useForm, SubmitHandler, Controller} from "react-hook-form";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import {GoogleOutlined} from "@ant-design/icons";
const { Title, Link } = Typography;

type Inputs = {
    email: string,
    password: string,
    checkBoxflag: boolean
};


const SignIn = () => {
    const avaibleSymb = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const {
        register,
        handleSubmit,
        formState: {errors},
        control
    } = useForm();

    const onSubmit = (data: any) => console.log("Login basic", data);

    function onChange(e: any) {
        console.log(`checked = ${e.target.checked}`);
    }

    const responseGoogle = (response: any) => {
        console.log("google profileInfo: ", response.profileObj);
    }
    const responseFacebook = (response: any) => {
        console.log("facebook profileInfo: ", response);
    }


    return (
        <div className="SignInWrapper">
            <Row justify="center">
                <Col className="ImgBlock" xs={0} sm={0} md={10} lg={10} xl={12}>
                    <img src="https://source.unsplash.com/K4mSJ7kc0As/600x800"/>
                </Col>
                <Col className="FormBlock" xs={20} sm={22} md={10} lg={10} xl={12}>
                    <Col span = {18}>
                        <Form onFinish={handleSubmit(onSubmit)}>

                            <Title className = "title-form" level={2}>Welcome Back!</Title>

                            <Form.Item name="email">
                                <Input className="email" placeholder="Email" {...register("email", {required: true, maxLength: 50, pattern: avaibleSymb})}></Input>
                                {errors.email && <div className="errorMassage"><span>This input is required , maximum length is 50 symbols and has such template as: expample.exam@gmail.com</span></div>}
                            </Form.Item>

                            <Form.Item name="password">
                                <Input.Password className="password" placeholder="Password" {...register("password", {required: true})}></Input.Password>
                                {errors.password && <div className="errorMassage"><span>This input is required</span></div>}
                            </Form.Item>

                            <Controller
                                control={control}
                                name="remeberMe"
                                defaultValue={false}
                                render={({
                                             field: { onChange, onBlur, value, name, ref },
                                             fieldState: { invalid, isTouched, isDirty, error },
                                             formState,
                                         }) => (
                                    <Checkbox
                                        onChange={onChange}
                                        checked={value}
                                    >Remember Me</Checkbox>
                                )}
                            />



                            <Form.Item>
                                <Button block size = "large" type="primary" htmlType="submit" shape="round">login</Button>
                            </Form.Item>

                            <hr className = "line"/>

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

                            <FacebookLogin
                                appId="226836885848996"
                                autoLoad={false}
                                fields="name,email,picture"
                                callback={responseFacebook}
                                cssClass="my-facebook-button-class"
                                icon="fa-facebook"
                            />



                            <hr className = "line"/>

                            <div className="footer-link">
                                <br/>
                                <Link href="/new-pass" target="_blank">
                                    Forgot password ?
                                </Link>
                                <br/>
                                <Link href="/create-log" target="_blank">
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

/*
<Form onFinish={handleSubmit(onSubmit)}>

    <Form.Item name="email">
        <Input className="email" placeholder="Email" {...register("email", {required: true, maxLength: 50, pattern: avaibleSymb})}></Input>
        {errors.email &&
        <span className="errorMassage"><i>This input is required , maximum length is 50 symbols and has such template as: expample.exam@gmail.com</i></span>}
    </Form.Item>

    <Form.Item name="password">
        <Input.Password className="password" placeholder="Password" {...register("password", {required: true})}></Input.Password>
        {errors.password && <span className="errorMassage"><i>This input is required</i></span>}
    </Form.Item>

    <Form.Item valuePropName="checked">
        <Checkbox {...register("remember-me")} >Remember Me</Checkbox>
    </Form.Item>

    <Form.Item>
        <Button block type="primary" htmlType="submit" shape="round">login</Button>
    </Form.Item>

    <hr/>

    <Form.Item>
        <GoogleLogin
            clientId="459389646319-e4g64jlp1jfpi66h3kgv1uuek71la5b0.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
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
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
    />
    <hr/>

    <div className="footer-link">
        <br/>
        <a href="#">Forgot Password?</a>
        <br/>
        <a href="#">Create an Account!</a>
    </div>

</Form>*/

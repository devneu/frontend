import React from "react";
import "./SignIn.scss";
import logo from "../logo.svg";
import {useForm, SubmitHandler} from "react-hook-form";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

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
        formState: {errors}
    } = useForm();

    const onSubmit: SubmitHandler<Inputs> = data => console.log("login button basic: ", data);

    const responseGoogle = (response: any) => {
        console.log("google profileInfo: ", response.profileObj);
    }
    const responseFacebook = (response: any) => {
        console.log("facebook profileInfo: ", response);
    }


    return (
        <div className="sign-in-wrapper">
            <div className="sign-in-block-flex">
                <div className="img-block">
                    <img src={logo}/>
                </div>
                <div className="form-block">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Hello !</h1>

                        <input type="text" placeholder="Enter your mail..." {...register("email", {required: true, maxLength: 50, pattern: avaibleSymb})}/>
                        {errors.email && <span className="error-massage"><i>This input is required , maximum length is 50 symbols and has such template as: expample.exam@gmail.com</i></span>}

                        <input type="password" placeholder="Password" {...register("password", {required: true})}/>
                        {errors.password && <span className="error-massage"><i>This input is required</i></span>}

                        <label><input type="checkbox" {...register("checkBoxflag")}/>Remember me</label>
                        <input type="submit" value="login"/>

                        <hr/>

                        <GoogleLogin
                            clientId="459389646319-e4g64jlp1jfpi66h3kgv1uuek71la5b0.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />

                        <FacebookLogin
                            appId="226836885848996"
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            cssClass="my-facebook-button-class"
                            icon="fa-facebook"
                        />

                        <hr/>

                        <a href="#">forgot password</a>
                        <a href="#">Create account</a>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default SignIn;
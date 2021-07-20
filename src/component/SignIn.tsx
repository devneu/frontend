import React from "react";
import "./SignIn.scss";
import logo from "../logo.svg";
import {useForm, SubmitHandler} from "react-hook-form";

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

    const onSubmit: SubmitHandler<Inputs> = data => console.log("delivered: ", data);

    return (
        <div className="SignInWrapper">
            <div className="SignInBlockFlex">
                <div className="ImgBlock">
                    <img src={logo}/>
                </div>
                <div className="FormBlock">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Hello !</h1>

                        <input type="text" placeholder="Enter your mail..." {...register("email", {required: true, maxLength: 50, pattern: avaibleSymb})}/>
                        {errors.email && <span className="errorMassage"><i>This input is required , maximum length is 50 symbols and has such template as: expample.exam@gmail.com</i></span>}

                        <input type="password" placeholder="Password" {...register("password", {required: true})}/>
                        {errors.password && <span className="errorMassage"><i>This input is required</i></span>}

                        <label><input type="checkbox" {...register("checkBoxflag")}/>Remember me</label>
                        <input type="submit" value="login"/>

                        <hr/>

                        <button>Login with google</button>
                        <button>Login with facebook</button>

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
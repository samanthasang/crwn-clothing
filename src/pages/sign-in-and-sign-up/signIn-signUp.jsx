import React from "react";

import SignIn from "../sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";


import "./singIn-signUp.scss";

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);



export default SignInAndSignUpPage;

import React, { Component } from "react";
import FormInput from "../../components/form-input/form-input";
import CustomButton from "../../components/custom-button/custom-button";
import "./sign-in.scss";

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword( email, password );
            this.setState({ email: '', password: ''});
        }catch  (error) {
            console.log(error);
        }

    }
    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value})
    }

    render() {
        return(
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>


                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type='email' label="Email" handleChange={this.handleChange} value={this.state.email} required />
                    <FormInput name="password" type='password' label="Passwoed" handleChange={this.handleChange} value={this.state.password} required />
                    <div className="buttons">
                        <CustomButton type='submit' > Sing In</CustomButton>
                        <CustomButton  onClick={signInWithGoogle} isGoogleSignIn> {' '} Sing In with Google {' '}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }


}

export default SignIn;
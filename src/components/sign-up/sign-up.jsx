import React, { Component } from 'react'

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.scss";

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("password dont match");
            return
        }
        try {
          const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
          );
    
          await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch(error) {
            console.log(error)
        }
    }

    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value})
    }


    render() {
        const { displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>


                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" type='text' label="Display Name" onChange={this.handleChange} value={displayName} required />
                    <FormInput name="email" type='email' label="Email" handleChange={this.handleChange} value={email} required />
                    <FormInput name="password" type='password' label="Passwoed" handleChange={this.handleChange} value={password} required />
                    <FormInput name="confirmPassword" type='password' label="Confirm Passwoed" handleChange={this.handleChange} value={confirmPassword} required />

                        <CustomButton type='submit' > Sing up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;
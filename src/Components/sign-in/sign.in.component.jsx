import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-buttons/custom-buttons.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import './sign.in.styles.scss';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
         e.preventDefault();
    try {
        await auth.signInWithEmailAndPassword(email, password)
        setEmail('')
        setPassword('')

    } catch (error) {
        console.log(error);
    }
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type="email" 
                    value={email}
                    label="email"
                    handleChange={handleChangeEmail}
                    required
                  />
                <FormInput
                    name='password'
                    type="password" 
                    value={password}
                    label="password"
                    handleChange={handleChangePassword}
                    required
                  />
              <div className='buttons'>
                <CustomButton type="submit">Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google</CustomButton>
              </div>
            </form>
        </div>
    )
}

export default SignIn;

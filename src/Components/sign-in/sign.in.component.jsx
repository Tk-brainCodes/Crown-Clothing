import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-buttons/custom-buttons.component';
import './sign.in.styles.scss';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
         e.preventDefault();
         setEmail('');
         setPassword('');
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
                <CustomButton type="submit">Sign In</CustomButton>
            </form>
        </div>
    )
}

export default SignIn;

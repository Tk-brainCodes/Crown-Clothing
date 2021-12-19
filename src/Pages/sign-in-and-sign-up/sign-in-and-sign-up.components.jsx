import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../Components/sign-in/sign.in.component';
import SignUp from '../../Components/sign-up/sign-up.components';

const SignInAndSignUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
           <SignIn/>
           <SignUp/>
        </div>
    )
}

export default SignInAndSignUpPage;

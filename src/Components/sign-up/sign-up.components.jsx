import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-buttons/custom-buttons.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';
const SignUp = () => {
      const [displayName, setDisplayName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');

    const handleDisplayName = e => setDisplayName(e.target.value)
    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)
    const handleConfirmPassword = e => setConfirmPassword(e.target.value)


    const handleSubmit = async e =>{
      e.preventDefault();
      if(password !== confirmPassword){
          alert("Password does not match")
          return;
      }
      try {
          const {user} = auth.createUserWithEmailAndPassword(email, password);
          await createUserProfileDocument(user, {displayName});
          setPassword('');
          setDisplayName('');
          setEmail('');
          setConfirmPassword('');
      } catch (error) {
          
      }
    }

    return (
        <div className='sign-up'>
            <h2 className="title">I do not hava an account</h2>
            <span>Sign up with email or password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
               <FormInput
                type="text"
                name="displayName"
                value={displayName}
                onChange={handleDisplayName}
                label="Display Name"
                required
               />
               <FormInput
                type='email'
                name='email'
                value={email}
                onChange={handleEmail}
                label='Email'
                required
                />
                <FormInput
                type='password'
                name='password'
                value={password}
                onChange={handlePassword}
                label='Password'
                required
                />
                <FormInput
                type='password'
                name='password'
                value={confirmPassword}
                onChange={handleConfirmPassword}
                label='Confirm Password'
                required
                />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </div>
    )
}
export default SignUp;

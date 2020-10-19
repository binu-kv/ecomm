import React from 'react';

import SignIn from '../../component/sign-in/sign-in.component';

import SignUP from '../../component/sign-up/sign-up.component';

import './sign-in-and-sign-up-page.styles.scss'


const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUP/>
    </div>
);

export default SignInAndSignUp;
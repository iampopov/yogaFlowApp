import React, { useState } from "react";
import "../../../styles/Login.css"
import WelcomeJumbotron from "./WelcomeJumbotron";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SingInForm";

function Login() {
    const [signIn, setSignIn] = useState({ checked: false, signedIn: false })

    const handleFormRender = (e, user) => {
        e.preventDefault()
        let temp = false;
        if (user) {
            temp = user;
        }
        setSignIn({
            checked: true,
            signedIn: temp
        });
    }
    return (
        <>
            {signIn.checked ? <></> : <WelcomeJumbotron handleFormRender={handleFormRender} />}
            {signIn.checked && !signIn.signedIn ?  <SignUpForm />: signIn.checked && signIn.signedIn ? <SignInForm/>: <></> }

        </>
    )
}

export default Login;
import { Container } from "/components/styled";
import SignInForm from "/components/SignIn/SignInForm";
import { React, ReactElement } from "/prelude/react";

const SignInPage = (props: {}): ReactElement => (
    <Container>
        <h1>Sign In</h1>
        <SignInForm />
    </Container>
);

export default SignInPage;

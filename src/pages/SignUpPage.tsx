import { Container } from "/components/styled";
import SignUpForm from "/components/SignUp/SignUpForm";
import { React, ReactElement } from "/prelude/react";

const SignUpPage = (props: {}): ReactElement => (
    <Container>
        <h1>Sign Up</h1>
        <SignUpForm />
    </Container>
);

export default SignUpPage;

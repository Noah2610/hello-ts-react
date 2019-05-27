import SignUpForm from "/components/SignUp/SignUpForm";
import { React, ReactElement } from "/prelude/react";
import { Firebase } from "/services/firebase";
import { Consumer as FirebaseConsumer } from "/services/firebase/context";

const SignUpPage = (props: {}): ReactElement => (
    <div>
        <h1>SignUp</h1>
        <SignUpForm />
    </div>
);

export default SignUpPage;

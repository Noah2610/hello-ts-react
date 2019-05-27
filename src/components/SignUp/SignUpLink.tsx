import { Link } from "react-router-dom";
import Routes from "/constants/Routes";
import { React, ReactElement } from "/prelude/react";

const SignUpLink = (props: {}): ReactElement => (
    <p>
        Sign Up <Link to={Routes.SignUp}>Here!</Link>
    </p>
);

export default SignUpLink;

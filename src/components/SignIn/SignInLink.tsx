import { Link } from "react-router-dom";
import Routes from "/constants/Routes";
import { React, ReactElement } from "/prelude/react";

const SignInLink = (props: {}): ReactElement => (
    <p>
        Sign In <Link to={Routes.SignIn}>Here!</Link>
    </p>
);

export default SignInLink;

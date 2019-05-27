import { auth as firebaseAuth } from "firebase";
import { History } from "history";
import { withRouter, Link } from "react-router-dom";
import { compose } from "recompose";
import Routes from "/constants/Routes";
import { React, ReactElement } from "/prelude/react";
import { Firebase } from "/services/firebase";
import { withFirebase } from "/services/firebase/context";

type UserCredential = firebaseAuth.UserCredential;

interface IProps {
    firebase: Firebase;
    history: History;
}

interface IState {
    username: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    error?: any; // TODO
}

const INITIAL_STATE: IState = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    error: null,
};

class SignUpForm extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
        this.state = { ...INITIAL_STATE };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.isValid = this.isValid.bind(this);
    }

    public render(): ReactElement {
        const {
            username,
            email,
            password,
            passwordConfirmation,
            error,
        } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    placeholder="Full Name"
                    className="form-control"
                />
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    placeholder="Email Address"
                    className="form-control"
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    placeholder="Password"
                    className="form-control"
                />
                <input
                    type="password"
                    name="passwordConfirmation"
                    value={passwordConfirmation}
                    onChange={this.onChange}
                    placeholder="Confirm Password"
                    className="form-control"
                />

                <button
                    disabled={!this.isValid()}
                    type="submit"
                    className="btn btn-primary"
                >
                    Sign Up
                </button>

                {error && (
                    <div className="container alert alert-danger">
                        <p>{error.message}</p>
                    </div>
                )}
            </form>
        );
    }

    // TODO: Remove any
    private onChange(event: any): void {
        const name = event.target.name;
        const value = String(event.target.value);
        if (Object.keys(this.state).includes(name)) {
            // @ts-ignore
            this.setState({
                [String(event.target.name)]: String(event.target.value),
            });
        }
    }

    // TODO: Remove any
    private onSubmit(event: any): void {
        event.preventDefault();

        const { username, email, password } = this.state;
        this.props.firebase
            .createUser(email, password)
            .then((authUser: UserCredential) => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(Routes.Home);
            })
            // TODO: Remove any
            .catch((error: any) => {
                this.setState({ error });
            });
    }

    private isValid(): boolean {
        const { username, email, password, passwordConfirmation } = this.state;
        return (
            password === passwordConfirmation &&
            password.length > 0 &&
            email.length > 0 &&
            username.length > 0
        );
    }
}

export default compose(
    withRouter,
    withFirebase,
)(SignUpForm);

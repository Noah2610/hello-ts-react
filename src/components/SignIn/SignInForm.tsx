import { auth as firebaseAuth } from "firebase";
import { History } from "history";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import SignUpLink from "/components/SignUp/SignUpLink";
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
    email: string;
    password: string;
    error?: any;
}

const INITIAL_STATE: IState = {
    email: "",
    password: "",
    error: null,
};

class SignInForm extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
        this.state = { ...INITIAL_STATE };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.isValid = this.isValid.bind(this);
    }

    public render(): ReactElement {
        const { email, password, error } = this.state;

        return (
            <div>
                <form onSubmit={this.onSubmit}>
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

                    <button
                        disabled={!this.isValid()}
                        type="submit"
                        className="btn btn-primary"
                    >
                        Log In
                    </button>

                    {error && (
                        <div className="alert alert-danger">
                            <p>{error.message}</p>
                        </div>
                    )}
                </form>

                <SignUpLink />
            </div>
        );
    }

    // TODO: Remove any
    private onChange(event: any): void {
        const name = event.target.name;
        const value = event.target.value;
        if (Object.keys(this.state).includes(name)) {
            // @ts-ignore
            this.setState({
                [String(name)]: String(value),
            });
        }
    }

    // TODO: Remove any
    private onSubmit(event: any): void {
        event.preventDefault();

        const { email, password } = this.state;
        this.props.firebase
            .signInUser(email, password)
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
        const { email, password } = this.state;
        return email.length > 0 && password.length > 0;
    }
}

export default compose(
    withRouter,
    withFirebase,
)(SignInForm);

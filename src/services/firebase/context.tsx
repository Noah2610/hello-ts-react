import { Firebase } from ".";
import { React, ReactElement } from "/prelude/react";

// Context
export const Context = React.createContext(null);

// Context Provider
export const Provider = (props: any): ReactElement => (
    <Context.Provider value={new Firebase()}>{props.children}</Context.Provider>
);

// Context Consumer
export const Consumer = (props: any): ReactElement => (
    <Context.Consumer>{props.children}</Context.Consumer>
);

// Higher-Order Component wrapper for Consumer
// interface IWithFirebaseProps {
//     firebase: Firebase;
// }

export const withFirebase = <
    P extends object & { firebase: Firebase },
    C extends React.Component<P, object>
>(
    Component: new (props: P) => C,
): ((props: object) => ReactElement) => (props: P): ReactElement => (
    <Context.Consumer>
        {(firebase: Firebase): ReactElement => (
            <Component {...props} firebase={firebase} />
        )}
    </Context.Consumer>
);

import { Firebase, FirebaseContext } from ".";
import { React, ReactElement } from "/prelude/react";

const FirebaseProvider = (props: any): ReactElement => (
    <FirebaseContext.Provider value={new Firebase()}>
        props.children
    </FirebaseContext.Provider>
);

export default FirebaseProvider;

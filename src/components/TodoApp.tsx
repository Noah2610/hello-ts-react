import { React, ReactDOM, ReactElement } from "prelude/react";

export default class TodoApp extends React.Component<{}, {}> {
    public constructor(props: {}) {
        super(props);
    }

    public render(): ReactElement {
        return <h1>Hi there!</h1>;
    }
}

import { React, ReactDOM, ReactElement } from "prelude/react";
import { ITodoEntry } from "store/state";

export default class Entry extends React.Component<ITodoEntry, {}> {
    public constructor(props: ITodoEntry) {
        super(props);
    }

    public render(): ReactElement {
        return (
            <div>
                <span className="text-left">{this.props.name}</span>
                <span className="text-right">{this.props.completed}</span>
            </div>
        );
    }
}

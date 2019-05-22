import { React, ReactDOM, ReactElement } from "/prelude/react";
import { connect } from "/prelude/redux";
import { ICombinedState } from "/store";
import { ITodoEntry, TodoAppState } from "/store/state";

import Entry from "./Entry";

interface IProps {
    entries?: Array<ITodoEntry>;
}

class Entries extends React.Component<IProps, {}> {
    public constructor(props: IProps) {
        super(props);
    }

    public render(): ReactElement {
        if (this.props.entries) {
            return (
                <ul className="list-group">
                    {this.props.entries.map((entry: ITodoEntry, i: number) => {
                        return this.renderEntry(i, entry);
                    })}
                </ul>
            );
        } else {
            return <strong>No Todos!</strong>;
        }
    }

    public renderEntry(index: number, entry: ITodoEntry): ReactElement {
        let className = "list-group-item";
        if (entry.completed) {
            className += " disabled";
        }
        return (
            <li key={index} className={className}>
                <Entry
                    id={entry.id}
                    name={entry.name}
                    completed={entry.completed}
                />
            </li>
        );
    }
}

const mapStateToProps = (state: ICombinedState): IProps => ({
    entries: state.todoApp.todoEntries,
});

export default connect(
    mapStateToProps,
    null,
)(Entries);

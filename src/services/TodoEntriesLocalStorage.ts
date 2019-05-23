import * as _ from "lodash";
import { ActionCreator, IAction } from "/actions";
import { setTodoEntries } from "/actions/todoActions";
import { React, ReactElement } from "/prelude/react";
import { connect, Dispatch } from "/prelude/redux";
import { ICombinedState } from "/store";
import { ITodoEntry } from "/store/state";

const TODO_ENTRIES_KEY = "todoEntries";

interface IProps {
    entries?: Array<ITodoEntry>;
    setTodoEntries?: ActionCreator;
}

// This component handles saving todo entries data to localstorage,
// and initializing the redux store with the saved entries data from localstorage.
class TodoEntriesLocalStorage extends React.Component<IProps, {}> {
    public constructor(props: IProps) {
        super(props);
        // Load entries from localstorage into redux store
        this.updateTodoEntriesFromLocalStorage();
    }

    public componentDidUpdate(prevProps: IProps): void {
        if (!_.isEqual(prevProps.entries, this.props.entries)) {
            window.localStorage.setItem(
                TODO_ENTRIES_KEY,
                JSON.stringify(this.props.entries),
            );
        }
    }

    public render(): ReactElement {
        return null;
    }

    private updateTodoEntriesFromLocalStorage(): void {
        if (this.props.setTodoEntries) {
            const localStorageEntriesString = window.localStorage.getItem(
                TODO_ENTRIES_KEY,
            );
            if (localStorageEntriesString) {
                let localStorageEntries;
                try {
                    localStorageEntries = JSON.parse(localStorageEntriesString);
                } catch (err) {
                    localStorageEntries = null;
                }
                if (localStorageEntries) {
                    this.props.setTodoEntries(localStorageEntries);
                }
            }
        }
    }
}

const mapStateToProps = (state: ICombinedState): IProps => ({
    entries: state.todoApp.todoEntries,
});

const mapDispatchToProps = (dispatch: Dispatch): object => ({
    setTodoEntries: (entries: Array<ITodoEntry>): IAction =>
        dispatch(setTodoEntries(entries)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoEntriesLocalStorage);

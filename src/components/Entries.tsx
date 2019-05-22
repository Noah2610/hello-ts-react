import { React, ReactDOM, ReactElement } from "/prelude/react";
import { connect } from "/prelude/redux";
import { ICombinedState } from "/store";
import {
    FilterCompleted,
    ITodoAppFilter,
    ITodoEntry,
    TodoAppState,
} from "/store/state";

import Entry from "./Entry";

interface IProps {
    entries?: Array<ITodoEntry>;
    filter?: ITodoAppFilter;
}

class Entries extends React.Component<IProps, {}> {
    public constructor(props: IProps) {
        super(props);
    }

    public render(): ReactElement {
        const entries = this.getEntries();
        if (entries.length) {
            return (
                <ul className="todo-entries list-group">
                    {entries.map((entry: ITodoEntry, i: number) => {
                        return this.renderEntry(i, entry);
                    })}
                </ul>
            );
        } else {
            return <h2>No Todos!</h2>;
        }
    }

    private getEntries(): Array<ITodoEntry> {
        const entries = this.props.entries;
        const filter = this.props.filter;
        if (entries) {
            if (filter) {
                return entries.filter(
                    (entry: ITodoEntry): boolean => {
                        return (
                            this.completedFilterPasses(
                                entry.completed,
                                filter.completed,
                            ) && this.nameFilterPasses(entry.name, filter.name)
                        );
                    },
                );
            } else {
                return entries;
            }
        } else {
            return [];
        }
    }

    private completedFilterPasses(
        entryCompleted: boolean,
        filterCompleted: FilterCompleted,
    ): boolean {
        switch (filterCompleted) {
            case FilterCompleted.All: {
                return true;
            }
            case FilterCompleted.Completed: {
                return entryCompleted;
            }
            case FilterCompleted.NotCompleted: {
                return !entryCompleted;
            }
        }
    }

    private nameFilterPasses(entryName: string, filterName: string): boolean {
        entryName = entryName.toLowerCase();
        filterName = filterName.toLowerCase();

        if (filterName.length === 0 || entryName === filterName) {
            return true;
        }

        const regexSqueezeWhitespace = /\s{2,}/g;
        const splitEntryName = entryName
            .replace(regexSqueezeWhitespace, " ")
            .split(" ");
        return filterName
            .replace(regexSqueezeWhitespace, " ")
            .split(" ")
            .some(
                (filterWord: string): boolean => {
                    return (
                        filterWord.length > 0 &&
                        splitEntryName.some(
                            (entryWord: string): boolean => {
                                return !!entryWord.match(filterWord);
                            },
                        )
                    );
                },
            );
    }

    private renderEntry(index: number, entry: ITodoEntry): ReactElement {
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
    filter: state.todoApp.filter,
});

export default connect(
    mapStateToProps,
    null,
)(Entries);

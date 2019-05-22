export interface ITodoEntry {
    id: number;
    name: string;
    completed: boolean;
}

export interface IState {}

export enum FilterCompleted {
    All = "FILTER_COMPLETED_ALL",
    Completed = "FILTER_COMPLETED_TRUE",
    NotCompleted = "FILTER_COMPLETED_FALSE",
}

export interface ITodoAppFilter {
    name: string;
    completed: FilterCompleted;
}

export interface ITodoAppState extends IState {
    todoEntries: Array<ITodoEntry>;
    filter: ITodoAppFilter;
}

export class TodoAppState implements ITodoAppState {
    public todoEntries: Array<ITodoEntry>;
    public filter: ITodoAppFilter;

    // An object implementing `ITodoAppState` may be passed to the constructor.
    // The constructor will then copy all of the old state's fiels into the new state (probably).
    public constructor(
        oldState: ITodoAppState = {
            todoEntries: [],
            filter: { name: "", completed: FilterCompleted.All },
        },
    ) {
        this.todoEntries = oldState.todoEntries.map(
            (entry: ITodoEntry): ITodoEntry => {
                return { ...entry };
            },
        );
        this.filter = { ...oldState.filter };
    }
}

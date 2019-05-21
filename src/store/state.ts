export interface ITodoEntry {
    id: number;
    name: string;
    completed: boolean;
}

export interface IState {}

export class TodoAppState implements IState {
    public todoEntries: Array<ITodoEntry>;

    public constructor(entries: Array<ITodoEntry> = []) {
        this.todoEntries = entries;
    }
}

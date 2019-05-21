export interface ITodoEntry {
    id: number;
    name: string;
}

export interface IState {
    todoEntries: Array<ITodoEntry>;
}

export class State implements IState {
    public todoEntries: Array<ITodoEntry>;

    public constructor(entries: Array<ITodoEntry> = []) {
        this.todoEntries = entries;
    }
}
